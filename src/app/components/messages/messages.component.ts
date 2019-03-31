import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';
import { MessageRequest } from 'src/app/classes/message-request';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @ViewChild('messages') messagesWrapper: ElementRef;

  subscription;
  userInput = '';
  testDate = new Date();
  user: User;
  groupChats: any[] = [{
    firstName: 'John', lastName: 'Snow', fullName: 'General Chat', createdDate: this.testDate,
    messages: Array<Message>(),
  }];
  selectedGroup = this.groupChats[0];

  constructor(private http: HttpClient, private messagesService: MessagesService, private userService: UserService) {
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
    this.getMessages();
    this.scrollToBottom();
    this.subscription = setInterval(() => {
      this.getMessages();
    }, 2500);
  }

  ngOnDestroy() {
    clearInterval(this.subscription);
  }

  scrollToBottom() {
    //console.log('Scrolling to Bottom');
    setTimeout(() => {
      this.messagesWrapper.nativeElement.scrollTop = this.messagesWrapper.nativeElement.scrollHeight;
    }, 100);
  }

  getMessages() {
    this.messagesService.getMessages().subscribe((response) => {
      //console.log(response);
      this.groupChats[0].messages = response;
      const messagesLength = this.groupChats[0].messages.length;
      // if (this.groupChats[0].messages[messagesLength - 1].created_by_user !== this.user.userName) {
      //   this.scrollToBottom();
      // }
    });
  }

  send_message() {
    if (!this.userInput) {
      return;
    }
    let newMessage: MessageRequest = new MessageRequest();
    newMessage.channelId = 194; //TODO this should be the current channelId
    newMessage.userId = this.user.userId,
    newMessage.message = this.userInput,
    
    this.selectedGroup.messages.push(newMessage);
    this.messagesService.creatMessage(newMessage).subscribe((response) => {
      return response;
    });
    this.userInput = '';
    this.scrollToBottom();
  }
  createChatGroup() {
    // this.messagesService.createChat();
  }
  changeSelectedGroup(group: any) {
    this.selectedGroup = group;
  }

}

