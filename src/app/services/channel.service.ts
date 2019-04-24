import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Channel } from '../classes/channel';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private channelUrl: string = environment.url + "/channels"

  constructor(private http: HttpClient, private projectService: ProjectService) { }

  getChannels(): Observable<Array<Channel>> {
    let headers: HttpHeaders = this.getHeaders();

    let project = this.projectService.getActiveProject();
    let url = this.channelUrl;
    if (project) {
      url = url + "?project=" + project.projectId 
    }

    return this.http.get<Array<Channel>>(url, { headers: headers, withCredentials: true });
  }

  createChannel(channel: Channel): Observable<Object> {
    let headers: HttpHeaders = this.getHeaders();

    let project = this.projectService.getActiveProject();
    channel.projectId = project.projectId;

    return this.http.post<Channel>(this.channelUrl, channel, { headers: headers, withCredentials: true });
  }

  updateChannel(channel: Channel, channelId: number): Observable<Object> {
    let headers: HttpHeaders = this.getHeaders();
    let url = this.channelUrl + "/" + channelId;

    return this.http.put(url, JSON.stringify(channel), { headers: headers, withCredentials: true });
  }

  deleteChannel(channelId: number): Observable<Object> {
    let headers: HttpHeaders = this.getHeaders();
    let url = this.channelUrl + "/" + channelId;

    return this.http.delete(url, { headers: headers, withCredentials: true });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('X-Requested-With', 'XMLHttpRequest')
      .set('Content-Type', 'application/json');
  }
}
