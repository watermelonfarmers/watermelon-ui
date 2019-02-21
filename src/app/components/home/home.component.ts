import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'watermelon-app';

  //watermelon server endpoint URL for hello test 
  readonly TEST_URL = 'https://watermelon-service.herokuapp.com/hello?fbclid=IwAR1_y8TdSRchf7GRUYW9IAFs-GfPnDwn-vHVH2OFUlwypmkqRhBSPWpNgWA';

  //defines hello variable that will take any type
  hello: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  //method to perform the get request to the watermelon server
  //expecting hello text response
  getHello() {
    this.http.get(this.TEST_URL, {responseType: 'text'}).subscribe((res) => {
      this.hello = res;
    });

  }

}
