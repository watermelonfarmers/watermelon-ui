import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @ViewChild('messages') messagesWrapper: ElementRef;
  ngOnInit(): void {
    this.getMessages();
    this.scrollToBottom();
    this.subscription = setInterval(() => {
      this.getMessages();
    }, 2500);
    console.log(this.user);
    console.log(this.messagesWrapper);
  }

  scrollToBottom() {
    console.log('Scrolling to Bottom');
    setTimeout(() => {
      this.messagesWrapper.nativeElement.scrollTop = this.messagesWrapper.nativeElement.scrollHeight;
    }, 100);
  }

  getMessages() {
    this.messagesService.getMessages().subscribe((response) => {
      console.log(response);
      this.groupChats[0].messages = response;
      const messagesLength = this.groupChats[0].messages.length;
      // if (this.groupChats[0].messages[messagesLength - 1].created_by_user !== this.user.userName) {
      //   this.scrollToBottom();
      // }
    });
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    clearInterval(this.subscription);
  }
// tslint:disable-next-line: member-ordering
  title = 'watermelon-app';
// tslint:disable-next-line: member-ordering
  subscription;

  // watermelon server endpoint URL for hello test
// tslint:disable-next-line: member-ordering
  readonly TEST_URL = 'https://watermelon-service.herokuapp.com/hello?fbclid=IwAR1_y8TdSRchf7GRUYW9IAFs-GfPnDwn-vHVH2OFUlwypmkqRhBSPWpNgWA';

  // defines hello variable that will take any type
// tslint:disable-next-line: member-ordering
  hello: any;
// tslint:disable-next-line: member-ordering
  userInput = '';
// tslint:disable-next-line: member-ordering
  testDate = new Date();
// tslint:disable-next-line: member-ordering
// tslint:disable-next-line: member-ordering
  user: { userName: any; };
// tslint:disable-next-line: member-ordering
  groupChats: any[] = [{
    firstName: 'John', lastName: 'Snow', fullName: 'John Snow', createdDate: this.testDate,
    messages: []}];
// tslint:disable-next-line: member-ordering
  selectedGroup = this.groupChats[0];
// tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private messagesService: MessagesService, private userService: UserService) {console.log('testDate is' + this.testDate);
// tslint:disable-next-line: align
  this.user = this.userService.getUser();
}

  // method to perform the get request to the watermelon server
  // expecting hello text response
  getHello() {
    this.http.get(this.TEST_URL, {responseType: 'text'}).subscribe((res) => {
      this.hello = res;
    });

  }
  send_message() {
    console.log(this.userInput);
    if (!this.userInput) {
      return;
    }
    const date = new Date();
    const newMessage = {
      created: date,
      created_by_user: this.user.userName,
      id: (+new Date()) + '',
      last_modified: date,
      message: this.userInput,
};
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

