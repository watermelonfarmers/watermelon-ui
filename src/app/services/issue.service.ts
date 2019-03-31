import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IssueRequest } from '../classes/issue-request';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Issue } from '../classes/issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issueUrl: string = environment.url + "/issues"

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Array<Issue>> {
    let headers: HttpHeaders = this.getHeaders();

    return this.http.get<Array<Issue>>(this.issueUrl, {headers: headers, withCredentials:true});
  }

  getIssueById(issueId: number): Observable<Issue> {
    let headers: HttpHeaders = this.getHeaders();
    let url = this.issueUrl + "/" + issueId;

    return this.http.get<Issue>(url, {headers: headers, withCredentials:true});
  }

  createIssue(issue: IssueRequest): Observable<Object> {
    let headers: HttpHeaders = this.getHeaders();

    return this.http.post(this.issueUrl, JSON.stringify(issue), {headers: headers, withCredentials:true});
  }

  updateIssue(issue: IssueRequest, issueId: number): Observable<Object> {
    let headers: HttpHeaders = this.getHeaders();
    let url = this.issueUrl + "/" + issueId;

    return this.http.put(url, JSON.stringify(issue), {headers: headers, withCredentials:true});
  }

  deleteIssue(issueId: number): Observable<Object> {
    let headers: HttpHeaders = this.getHeaders();
    let url = this.issueUrl + "/" + issueId;

    return this.http.delete(url, {headers: headers, withCredentials:true});
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders()
    .set('X-Requested-With', 'XMLHttpRequest')
    .set('Content-Type', 'application/json');
  }
}
