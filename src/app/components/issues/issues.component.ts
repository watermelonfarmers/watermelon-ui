import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service'

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

    constructor(private storage: IssueService) {  }

    ngOnInit() {
        this.initIssue();
    }

     initIssue() {
        var issueArr = this.storage.getItem('issueList');
        if (issueArr) {
          this.issueList = issueArr
        }
        var doneArr = this.storage.getItem('doneList');
        if (doneArr) {
          this.doneList = doneArr

        }
      }

    addIssue(event)
    {
      console.log("nnnnnn");
      let issueObj = {
        issue: this.issue,
        done:false
      }
      if(event.keyCode == 13)
      {
        var tempList = this.storage.getItem('issueList');
        if (tempList) {
          tempList.push(issueObj);
          this.storage.setItem('issueList', tempList);
        }
        else {
          var tempData = []
          tempData.push(issueObj)
          this.storage.setItem('issueList', tempData);
        }

        console.log(tempData);
        this.issueList.push(issueObj);
        this.issue = '';
      }
      console.log(this.issueList);
     
    }

    deleteIssue(index, done) {
      if (done) {
        this.issueList.splice(index, 1);
        this.storage.setItem('issueList', this.issueList)
      } else {
        this.doneList.splice(index, 1);
        this.storage.setItem('doneList', this.doneList)
      }
    }
  

  changeIssue(index, done) {
    if (done) {
      var tempIssue = this.issueList[index]
      this.doneList.push(tempIssue);
      this.issueList.splice(index, 1);
      this.storage.setItem('issueList', this.issueList)
      this.storage.setItem('doneList', this.doneList)
    } else {
      var tempDone = this.doneList[index]
      this.issueList.push(tempDone);
      this.doneList.splice(index, 1);
      this.storage.setItem('todoList', this.issueList)
      this.storage.setItem('doneList', this.doneList)
    }

  }
  
}