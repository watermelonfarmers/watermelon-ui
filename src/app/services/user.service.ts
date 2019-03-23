import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import {environment} from '../../environments/environment';

import { User } from "../classes/user";
import { Register } from '../classes/register';
import { ProfileUpdate } from '../classes/profileupdate';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.url + "/users";
  constructor(private http: HttpClient) { }

  registerUser(user: Register): Observable<Object>{
    let headers: HttpHeaders = new HttpHeaders()
    .set('X-Requested-With', 'XMLHttpRequest')
    .set('Content-Type', 'application/json');

    return this.http.post(this.url, JSON.stringify(user), { headers: headers });
  }

  getUser(){
    return JSON.parse(sessionStorage.getItem("user"));
  }
  
  getAllUsers(): Observable<Array<User>> {
    let headers: HttpHeaders = new HttpHeaders()
    .set('X-Requested-With', 'XMLHttpRequest')
    .set('Content-Type', 'application/json');

    return this.http.get<Array<User>>(this.url, { headers: headers });
  }

  updateUser(user:ProfileUpdate): Observable<User> {
    let headers: HttpHeaders = new HttpHeaders()
    .set('X-Requested-With', 'XMLHttpRequest')
    .set('Content-Type', 'application/json');

    return this.http.put<User>(this.url, JSON.stringify(user), {headers: headers, withCredentials:true} )
  }
  
}
