import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private url = "https://watermelon-service.herokuapp.com/api";
  constructor(private httpClient: HttpClient) { 

  }

  creatMessage(message){
    const stringifyMessage = JSON.stringify(message);
    return this.httpClient.post(this.url + "/messages", message).pipe(map((response)=> {
      return response;
    }))
  }

  getMessages(){
    return this.httpClient.get(this.url + "/messages").pipe(map((response) => {
      return response;
    }))
  }
}
