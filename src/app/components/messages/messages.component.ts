import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagesService } from '../../services/messages.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';
import { MessageRequest } from 'src/app/classes/message-request';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ChannelService } from 'src/app/services/channel.service';
import { Channel } from 'src/app/classes/channel';

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

  subscription;
  userInput = '';
  testDate = new Date();
  user: User;
  

  constructor(private http: HttpClient, private messagesService: MessagesService, private userService: UserService, private channelService: ChannelService) {
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
    this.getChannels();
    this.scrollToBottom();
  }

  ngOnDestroy() {
    clearInterval(this.subscription);
  }

  scrollToBottom() {
    setTimeout(() => {
      this.messagesWrapper.nativeElement.scrollTop = this.messagesWrapper.nativeElement.scrollHeight;
    }, 100);
  }

  getMessages() {
    //clearInterval(this.subscription);
    this.messagesService.getMessagesByChannelId(this.selectedChannel.id).subscribe((response) => {
      this.messageList = response;
      // this.subscription = setInterval(() => {
      //   this.getMessages();
      // }, 2500);
    });
  }

  getChannels() {
    this.channelService.getChannels().subscribe(response => {
      this.channelList = response;
      this.selectedChannel = this.channelList[0];
      this.getMessages();
    });
  }

  send_message() {
    if (!this.userInput) {
      return;
    }
    let newMessage: MessageRequest = new MessageRequest();
    newMessage.channelId = this.selectedChannel.id;
    newMessage.userId = this.user.userId;
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

}

