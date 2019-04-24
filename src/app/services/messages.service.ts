import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageRequest } from '../classes/message-request';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private url = environment.url + "/messages";
  constructor(private httpClient: HttpClient) { 

  }

  creatMessage(message : MessageRequest) {
    return this.httpClient.post<MessageRequest>(this.url, message);
  }

  getMessages(): Observable<Array<Message>>{
    let headers: HttpHeaders = this.getHeaders();
    return this.httpClient.get<Array<Message>>(this.url, { headers: headers, withCredentials: true });
  }

  getMessagesByChannelId(channelId: number): Observable<Array<Message>>{
    let headers: HttpHeaders = this.getHeaders();
    let messageUrl = this.url + "/" + channelId;
    return this.httpClient.get<Array<Message>>(messageUrl, { headers: headers, withCredentials: true });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('X-Requested-With', 'XMLHttpRequest')
      .set('Content-Type', 'application/json');
  }
}
