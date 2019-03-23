import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  ngOnInit(): void {
    this.subscription = setInterval(() => {
      this.messagesService.getMessages().subscribe((response) => {
        this.groupChats[0].messages = response;
      });
    }, 5000);
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    clearInterval(this.subscription);
  }
// tslint:disable-next-line: member-ordering
  title = 'watermelon-app';
// tslint:disable-next-line: member-ordering
  subscription: NodeJS.Timer;

  // watermelon server endpoint URL for hello test
// tslint:disable-next-line: member-ordering
  readonly TEST_URL = 'https://watermelon-service.herokuapp.com/hello?fbclid=IwAR1_y8TdSRchf7GRUYW9IAFs-GfPnDwn-vHVH2OFUlwypmkqRhBSPWpNgWA';

  // defines hello variable that will take any type
// tslint:disable-next-line: member-ordering
  hello: any;
// tslint:disable-next-line: member-ordering
  userInput: string;
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
  }
  createChatGroup() {
    // this.messagesService.createChat();
  }
  changeSelectedGroup(group: any) {
    this.selectedGroup = group;
  }

}

