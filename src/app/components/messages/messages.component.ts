import { Component, OnInit } from '@angular/core';
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
    setInterval(() => {
      this.messagesService.getMessages().subscribe((response) => {
        this.groupChats[0].messages = response;
      });
    }, 1000);
  }
  title = 'watermelon-app';

  // watermelon server endpoint URL for hello test
  readonly TEST_URL = 'https://watermelon-service.herokuapp.com/hello?fbclid=IwAR1_y8TdSRchf7GRUYW9IAFs-GfPnDwn-vHVH2OFUlwypmkqRhBSPWpNgWA';

  // defines hello variable that will take any type
  hello: any;
  userInput: string;
  testDate = new Date();
  user;
  groupChats: any[] = [{
    firstName: 'John', lastName: 'Snow', fullName: 'John Snow', createdDate: this.testDate,
    messages: []}];
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
  // createChatGroup(){
  //   this.messagesService.createChat();
  // }
  changeSelectedGroup(group) {
    this.selectedGroup = group;
  }

}

