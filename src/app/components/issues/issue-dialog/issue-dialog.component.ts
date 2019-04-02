import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Issue } from 'src/app/classes/issue';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';

export interface IssueDialogData {
  issue: Issue;
  option: string;
}

export interface SelectDialog {
  value: string;
  viewValue: string;
}

export interface SelectDialogNumeric {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-issue-dialog',
  templateUrl: './issue-dialog.component.html',
  styleUrls: ['./issue-dialog.component.scss']
})
export class IssueDialogComponent implements OnInit {

  priorities: SelectDialogNumeric[] = [
    { value: 1, viewValue: 'Low' },
    { value: 5, viewValue: 'Medium' },
    { value: 10, viewValue: 'High' }
  ];

  status: SelectDialog[] = [
    { value: 'NEW', viewValue: 'New' },
    { value: 'IN PROGRESS', viewValue: 'In Progress' },
    { value: 'COMPLETED', viewValue: 'Completed' }
  ];

  public dialogTitle;
  public buttonTitle;

  public issue: Issue;
  public users: Array<User>;

  constructor(public dialogRef: MatDialogRef<IssueDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IssueDialogData,
    private userService: UserService) {
    dialogRef.disableClose = true;
    this.issue = data.issue;


    if (data.option === "CREATE") {
      this.dialogTitle = "Add a new Issue";
      this.buttonTitle = "Create";

      this.issue.status = "NEW";
      let user: User = this.userService.getUser();
      this.issue.createdByUser = user;
    }
    else if (data.option === "UPDATE") {
      this.buttonTitle = "Update";
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => this.users = response);
  }

  compareUser(user1: User, user2: User): boolean {
    if (user1 && user2) {
      return user1.userId === user2.userId;
    }
  }

}
