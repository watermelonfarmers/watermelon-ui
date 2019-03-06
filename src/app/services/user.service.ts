import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl = "https://watermelon-service.herokuapp.com/api";
  constructor(private httpclient: HttpClient) { }

  registerUser(user:any){
    const stringifiedUser = JSON.stringify(user);
    const options = { headers: { "Content-Type": "application/json", "Accept": "text/plain"}};
    const url = this.apiurl + "/users"
    return this.httpclient.post(url,stringifiedUser, options).pipe(map((response) => {
      return response;
    }));
  }
  getUser(){
    return JSON.parse(sessionStorage.getItem("user"));
  }
  // loginUser(user){
  //   let headers = new HttpHeaders();
  //   headers.append("Authorization", "Basic " + btoa(user.name + ":" + user.password));
  //   headers.append("Content-Type", "application/X-www-form-urlencoded");
  //   headers.append("cache-control", "no cache");
  //   const url = this.apiurl + "/login";
  //   const httpparams = new HttpParams();
  //   httpparams.append("name", user.name);
  //   httpparams.append("password", user.password);
  //   return this.httpclient.get(url, {headers: headers, params: httpparams, withCredentials: true}).pipe(map((response) => {
  //     return response;
  //   }));
  // }
  // logout(){
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   let headers = new HttpHeaders();
  //   headers.append("Authorization", "Basic " + btoa(user.userName + ":" + user.password));
  //   headers.append("Content-Type", "application/X-www-form-urlencoded");
  //   headers.append("cache-control", "no cache");
  //   const httpparams = new HttpParams();
  //   httpparams.append("name", user.userName);
  //   httpparams.append("password", user.password);
  //   return this.httpclient.get(this.apiurl + "/logout", {headers: headers, withCredentials: true, params: httpparams}).pipe(map((response) =>{
  //     return response;
  //   }));
  // }
}
