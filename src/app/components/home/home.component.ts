import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'watermelon-app';

  //defines hello variable that will take any type
  hello: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

}
