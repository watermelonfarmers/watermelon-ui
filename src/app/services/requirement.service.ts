import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { requirement } from '../components/requirements/requirement';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

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

  requirementsUrl= 'https://watermelon-service.herokuapp.com/api/requirements';

  readRequirements() {
    return this.http.get(this.requirementsUrl);
  }

  readOneRequirement(id : Number) : Observable<requirement>{
    let requirementsUrl = this.requirementsUrl + '/' + id;
    return this.http.get<requirement>(requirementsUrl, httpOptions);
  }

  createRequirement(requirement: requirement) :Observable<requirement> {
    return this.http.post<requirement>(this.requirementsUrl, requirement, httpOptions)
  }

  updateRequirement(requirement : requirement) : Observable<requirement> {
    return this.http.put<requirement>(this.requirementsUrl, requirement, httpOptions)
  }

  deleteRequirement(id : Number) : Observable<requirement> {
    let requirementsUrl = this.requirementsUrl + '/' + id;
    return this.http.delete<requirement>(requirementsUrl, httpOptions)
  }
}