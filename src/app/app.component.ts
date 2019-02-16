import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'watermelon-app';

  //watermelon server endpoint URL for hello test 
  readonly TEST_URL = 'https://watermelon-service.herokuapp.com/hello?fbclid=IwAR1_y8TdSRchf7GRUYW9IAFs-GfPnDwn-vHVH2OFUlwypmkqRhBSPWpNgWA';

  //defines hello variable that will take any type
  // hello: any;
  // userInput: string;
  // testDate = new Date();
  // user = { // represents signed in user.
  //   id: 1,
  //   firstName: "John",
  //   lastName: "Snow",
  //   userName: "King in the North"
  // };
  // groupChats: any[] = [{
  //   firstName: "John", lastName: "Snow", fullName: "John Snow", createdDate: this.testDate,
  //   messages: [{message: "This is a test", date: new Date(), userId: 1}, {message: "This is also a test", date: new Date(), userId: 2}, {message: "This is the last test", date: new Date(), userId: 1}]
  // }, {
  //   firstName: "Ned", lastName: "Stark", fullName: "Ned Stark", createdDate: this.testDate,
  //   messages: [{message: "This is a test", date: new Date(), userId: 3}, {message: "This is also a test", date: new Date(), userId: 1}, {message: "This is the last test", date: new Date(), userId: 3}]
  // }];
  // selectedGroup = this.groupChats[0];
  // constructor(private http: HttpClient) {console.log("testDate is" + this.testDate)}

  // //method to perform the get request to the watermelon server
  // //expecting hello text response
  // getHello() {
  //   this.http.get(this.TEST_URL, {responseType: 'text'}).subscribe((res) => {
  //     this.hello = res;
  //   });

  // }
  // send_message() {
  //   console.log(this.userInput);
  //   const newMessage = {message: this.userInput, date: new Date(), userId: this.user.id};
  //   this.selectedGroup.messages.push(newMessage);
  //   this.userInput = "";
  // }

  // changeSelectedGroup(group) {
  //   this.selectedGroup = group;
  // }

}

