import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { User } from "../classes/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authenticated: boolean = false;
    private originUrl: string = null;
    private loginUrl: string = "https://watermelon-service.herokuapp.com/api/login";
    private logoutUrl: string = "https://watermelon-service.herokuapp.com/api/logout";
    private user_id: string = null

    constructor(private http: HttpClient) {
        if (sessionStorage.getItem('auth_token') != null)
        {
            this.user_id = sessionStorage.getItem('user_id');
            this.authenticated = true;
            this.checkAuthentication();
        }
    }

    public isAuthenticated(): boolean {
        return this.authenticated;
    }

    public setOriginUrl(url:string) {
        console.log(url);
        this.originUrl = url;
    }

    public getUserIdentifier(): string {
        return this.user_id;
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
            error => this.handleError(error)
        );
    }

    private processAuthentication(user: User)
    {
        if (user)
        {
            sessionStorage.setItem('auth_token', Math.random().toString(36).slice(2));
            this.user_id = user.userName.toString()
            sessionStorage.setItem('user_id', this.user_id);
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
        this.user_id = null;
        sessionStorage.removeItem('auth_token');
        sessionStorage.removeItem('user_id');
        sessionStorage.removeItem('user');

        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('X-Requested-With', 'XMLHttpRequest');
 
        this.http.get(this.logoutUrl, {headers:headers, withCredentials:true}).subscribe(response => console.log(response));

    }

    public getHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('X-Requested-With', 'XMLHttpRequest');
        return headers;
    }

    private handleError(error: any): Promise<any> {
        console.error('Error Occured in Authentication Module:', error);
        return Promise.reject(error.message || error);
    }
}
