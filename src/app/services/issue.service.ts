import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor() { }
  
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  getItem(key) {
    return JSON.parse(localStorage.getItem(key))
  }


}
