import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagesService } from '../../services/messages.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';
import { MessageRequest } from 'src/app/classes/message-request';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ChannelService } from 'src/app/services/channel.service';
import { Channel } from 'src/app/classes/channel';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @ViewChild('messages') messagesWrapper: ElementRef;

  channelList: Array<Channel> = new Array();
  messageList: Array<Message> = new Array();;
  selectedChannel: Channel;
  messageRefreshSubscription;
  userInput = '';
  currentUser: User;
  newChannel: string;


  constructor(private http: HttpClient, 
    private messagesService: MessagesService, 
    private userService: UserService, 
    private channelService: ChannelService,
    private projectService: ProjectService) {
    this.currentUser = this.userService.getUser();
  }

  ngOnInit(): void {
    this.getChannels();
    this.messageRefreshSubscription = setInterval(() => {
      this.getMessages();
    }, 2500);

    this.projectService.projectChanged$.subscribe(() => this.getChannels());
    this.scrollToBottom();
  }

  ngOnDestroy() {
    clearInterval(this.messageRefreshSubscription);
  }

  scrollToBottom() {
    setTimeout(() => {
      this.messagesWrapper.nativeElement.scrollTop = this.messagesWrapper.nativeElement.scrollHeight;
    }, 100);
  }

  getMessages() {
    if (this.selectedChannel) {
      this.messagesService.getMessagesByChannelId(this.selectedChannel.id).subscribe((response) => {
        this.messageList = response;
      });
    }
  }

  getChannels() {
    this.channelService.getChannels().subscribe(response => {
      this.channelList = response;
      this.selectedChannel = this.channelList[0];
      this.getMessages();
      this.scrollToBottom();
    });
  }

  send_message() {
    if (!this.userInput) {
      return;
    }
    let newMessage: MessageRequest = new MessageRequest();
    newMessage.channelId = this.selectedChannel.id;
    newMessage.userId = this.currentUser.userId;
    newMessage.message = this.userInput;

    this.messagesService.creatMessage(newMessage).subscribe((response) => {
      this.getMessages();
      return response;
    });
    this.userInput = '';
    this.scrollToBottom();
  }

  changeSelectedChannel(channel: Channel) {
    this.selectedChannel = channel;
    this.getMessages();
  }

  addChannel() {
    if (this.newChannel === undefined || this.newChannel === '') {return;}
    console.log(this.newChannel);

    let channel: Channel = new Channel();
    channel.name = this.newChannel;
    this.channelService.createChannel(channel).subscribe(() => this.getChannels());
    this.newChannel = '';
  }

}

