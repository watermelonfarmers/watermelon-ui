import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private url = environment.url + "/messages";
  constructor(private httpClient: HttpClient) { 

  }

  creatMessage(message){
    const stringifyMessage = JSON.stringify(message);
    return this.httpClient.post(this.url, message).pipe(map((response)=> {
      return response;
    }))
  }

  getMessages(){
    return this.httpClient.get(this.url).pipe(map((response) => {
      return response;
    }))
  }
}
