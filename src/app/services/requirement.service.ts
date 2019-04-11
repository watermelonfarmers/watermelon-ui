import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requirement } from '../classes/requirement';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import {environment} from '../../environments/environment';
import { Issue } from '../classes/issue';

const httpOptions = {
  headers : new HttpHeaders({
    'accept' : '*/*',
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class RequirementService {

  constructor(private http: HttpClient) { }

  usersUrl = environment.url + "/users";
  issuesUrl = environment.url +"/issues";
  requirementsUrl= environment.url + "/requirements";

  readRequirements() : Observable<Requirement []>{
    return this.http.get<Requirement []>(this.requirementsUrl);
  }

  readOneRequirement(id : Number) : Observable<Requirement>{
    let requirementsUrl = this.requirementsUrl + '/' + id;
    return this.http.get<Requirement>(requirementsUrl, httpOptions);
  }

  createRequirement(requirement: Requirement) :Observable<Requirement> {
    return this.http.post<Requirement>(this.requirementsUrl, requirement, httpOptions)
  }

  updateRequirement(requirement : Requirement) : Observable<Requirement> {
    let requirementsUrl = this.requirementsUrl + '/' + requirement.id;
    return this.http.put<Requirement>(requirementsUrl, requirement, httpOptions)
  }

  deleteRequirement(id : Number) : Observable<Requirement> {
    let requirementsUrl = this.requirementsUrl + '/' + id;
    return this.http.delete<Requirement>(requirementsUrl, httpOptions)
  }

  getUsers() : Observable<User []>{
    return this.http.get<User []>(this.usersUrl);
  }

  getIssues() : Observable<Issue []> {
    return this.http.get<Issue []>(this.issuesUrl);
  }
}