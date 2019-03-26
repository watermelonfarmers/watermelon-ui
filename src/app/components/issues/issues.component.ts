import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //NgModel lives here
import { Issue } from 'src/app/classes/issue';
import { IssueRequest } from 'src/app/classes/issue-request';


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

	public issues: Array<Issue>;
	public issue: Issue;
	public issueList = [];
	public doneList = [];

	constructor(private issueService: IssueService) { }

	ngOnInit() {
		this.initIssue();
	}

	initIssue() {
		// var issueArr = this.storage.getItem('issueList');
		// if (issueArr) {
		//   this.issueList = issueArr
		// }
		// var doneArr = this.storage.getItem('doneList');
		// if (doneArr) {
		// 	this.doneList = doneArr
		// }
	}



	addIssue(event) {
		console.log("nnnnnn");
		let issueObj = {
			issue: this.issue,
			done: false
		}
		// if (event.keyCode == 13) {
		// 	var tempList = this.storage.getItem('issueList');
		// 	if (tempList) {
		// 		tempList.push(issueObj);
		// 		this.storage.setItem('issueList', tempList);
		// 	}
		// 	else {
		// 		var tempData = []
		// 		tempData.push(issueObj)
		// 		this.storage.setItem('issueList', tempData);
		// 	}

		// 	console.log(tempData);
		// 	this.issueList.push(issueObj);
		// 	this.issue = '';
		// }
		console.log(this.issueList);

	}

	deleteIssue(index, done) {
		if (done) {
			this.issueList.splice(index, 1);
			//this.storage.setItem('issueList', this.issueList)
		} else {
			this.doneList.splice(index, 1);
			//this.storage.setItem('doneList', this.doneList)
		}
	}


	changeIssue(index, done) {
		if (done) {
			var tempIssue = this.issueList[index]
			this.doneList.push(tempIssue);
			this.issueList.splice(index, 1);
			//this.storage.setItem('issueList', this.issueList)
			//this.storage.setItem('doneList', this.doneList)
		} else {
			var tempDone = this.doneList[index]
			this.issueList.push(tempDone);
			this.doneList.splice(index, 1);
			//this.storage.setItem('todoList', this.issueList)
			//this.storage.setItem('doneList', this.doneList)
		}

	}

	/***************************************************************************
	 * TEST SERVICE CALLS
	*************************************************************************** */

	// testGetIssues() {

	// 	this.issueService.getIssues().subscribe(results => {
	// 		this.issues = results;
	// 		console.log(this.issues);
	// 		console.log(this.issues[0].title);
	// 	});		
	// }

	// testGetOneIssue() {

	// 	this.issueService.getIssueById(1).subscribe(result => {
	// 		this.issue = result
	// 		console.log(this.issue);
	// 		console.log(this.issue.title);
	// 	});		
	// }

	// testCreateIssue() {
	// 	let issue: IssueRequest = new IssueRequest();
	// 	issue.title = "this is an issue title";
	// 	issue.description = "this is an issue description"
	// 	issue.status = "IN PROGRESS"
	// 	issue.priority = 10;
	// 	issue.createdByUserId = 1;

	// 	this.issueService.createIssue(issue).subscribe();
	// }

	// testUpdateIssue() {
	// 	let issue: IssueRequest = new IssueRequest();
	// 	issue.status = "COMPLETE"
	// 	issue.assignedUserId = 1;

	// 	this.issueService.updateIssue(issue, 1).subscribe();
	// }

	// testDeleteIssue() {
	// 	this.issueService.deleteIssue(2).subscribe();
	// }

}