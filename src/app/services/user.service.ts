import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { User } from "../classes/user";
import { Register } from '../classes/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl = "https://watermelon-service.herokuapp.com/api";
  constructor(private http: HttpClient) { }

  registerUser(user: Register): Observable<Object>{
    let headers: HttpHeaders = new HttpHeaders()
    .set('X-Requested-With', 'XMLHttpRequest')
    .set('Content-Type', 'application/json');
    const url = this.apiurl + "/users"

    return this.http.post(url, JSON.stringify(user), { headers: headers });
  }

  getUser(){
    return JSON.parse(sessionStorage.getItem("user"));
  }
  
  getAllUsers(): Observable<Array<User>> {
    let headers: HttpHeaders = new HttpHeaders()
    .set('X-Requested-With', 'XMLHttpRequest')
    .set('Content-Type', 'application/json');
    const url = this.apiurl + "/users"

    return this.http.get<Array<User>>(url, { headers: headers });
  }
  
}
