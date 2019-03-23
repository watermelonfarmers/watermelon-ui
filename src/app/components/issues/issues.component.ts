import { Component, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //NgModel lives here

@NgModule({
  
  imports: [
    BrowserModule, 
    FormsModule  //import the FormsModule before binding with [(ngModel)]
  ],
  
})

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

	public issue: any = '';
	public issueList = [];
	public doneList = [];

  	constructor() {  }

  	ngOnInit() {

  	}

  	addIssue(event)
  	{
  		console.log("nnnnnn");
  		console.log(this.issueList);
  		let issueObj = {
  			issue: this.issue,
  			done:false
  		}
  		if(event.keyCode == 13)
  		{
  			this.issueList.push(issueObj);
  			this.issue = '';
  		}
	   
  	}

  	deleteIssue(index, done) {
	    if (done) {
	      this.issueList.splice(index, 1);
	    } else {
	      this.doneList.splice(index, 1);
	    }
	  }
  

  changeIssue(index, done) {
    if (done) {
      var tempIssue = this.issueList[index]
      this.doneList.push(tempIssue);
      this.issueList.splice(index, 1);
    } else {
      var tempDone = this.doneList[index]
      this.issueList.push(tempDone);
      this.doneList.splice(index, 1);
    }

  }
  
}
