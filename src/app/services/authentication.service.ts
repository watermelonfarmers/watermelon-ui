import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { User } from "../classes/user";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authenticated: boolean = false;
    private originUrl: string = null;
    private loginUrl: string = environment.url + "/login";
    private logoutUrl: string = environment.url + "/logout";
    private user_name: string = null;

    constructor(private http: HttpClient, private router: Router) {
        if (sessionStorage.getItem('auth_token') != null)
        {
            this.user_name = sessionStorage.getItem('user_name');
            this.authenticated = true;
            this.checkAuthentication();
        }
    }

    public isAuthenticated(): boolean {
        return this.authenticated;
    }

    public setOriginUrl(url:string) {
        this.originUrl = url;
    }

    public getUserIdentifier(): string {
        return this.user_name;
    }

    public authenticateUser(username:string, password:string): Observable<boolean> {
        
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('X-Requested-With', 'XMLHttpRequest')
        .set('Authorization', 'Basic ' + btoa(username + ':'+ password));
 
        return this.http.get(this.loginUrl, {headers:headers, withCredentials:true})
            .pipe(
              map(response => {
                this.processAuthentication(response as User);
                return this.authenticated;
            }));
    }

    private checkAuthentication()
    {
        let headers = this.getHeaders();
        return this.http.get(this.loginUrl, {headers:headers, withCredentials:true})
        .pipe(map(response => response as User))
        .subscribe(
            response => this.processAuthentication(response),
            error => this.logout()
        );
    }

    private processAuthentication(user: User)
    {
        if (user)
        {
            sessionStorage.setItem('auth_token', Math.random().toString(36).slice(2));
            this.user_name = user.userName.toString()
            sessionStorage.setItem('user_name', this.user_name);
            this.authenticated = true;
            sessionStorage.setItem("user", JSON.stringify(user));
        }
        else 
        {
            this.authenticated = false;
            this.logout();
        }
    }

    public logout() {
        this.authenticated = false;
        this.user_name = null;
        sessionStorage.removeItem('auth_token');
        sessionStorage.removeItem('user_name');
        sessionStorage.removeItem('user');

        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('X-Requested-With', 'XMLHttpRequest');
 
        this.http.get(this.logoutUrl, {headers:headers, withCredentials:true}).subscribe();
        this.router.navigate(['login']);

    }

    public getHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('X-Requested-With', 'XMLHttpRequest');
        return headers;
    }
}
