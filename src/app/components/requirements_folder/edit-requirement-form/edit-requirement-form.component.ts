import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Requirement } from '../../../classes/requirement'
import { RequirementService } from '../../../services/requirement.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from '../../../classes/user';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { Issue } from 'src/app/classes/issue';
import { IssueService } from "../../../services/issue.service";

@Component({
  selector: 'app-edit-requirement-form',
  templateUrl: './edit-requirement-form.component.html',
  styleUrls: ['./edit-requirement-form.component.scss']
})
export class EditRequirementFormComponent implements OnInit {


  statusOpts: string[] = ['NEW', 'IN PROGRESS', 'ACCEPTED'];
  priority : string [] = ['NORMAL', 'URGENT', 'VERY URGENT'];
  estimate : string [] = ['ONE WEEK', 'TWO WEEKS', 'THREE WEEKS', 'MORE THAN THREE WEEKS'];
  users: User [];
  issues : Issue [];
  currentDate : Date = new Date();
  dataAvailable : boolean = false;
  createdByUser : number;

  requirement : Requirement;
  //id : Number = Number(this.route.params['value'].id);
  id : Number;

  editRequirementForm : FormGroup = new FormGroup({
    'title': new FormControl('', [Validators.required, Validators.maxLength(25)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'status' : new FormControl('', Validators.required),
    'priority' : new FormControl('', Validators.required),
    'assignedToUser': new FormControl('', Validators.required),
    'relatedIssue' : new FormControl(''),
    'estimatedTime' : new FormControl(''),
    'dueDate' : new FormControl('', Validators.required)
  });


  constructor(
      @Inject(MAT_DIALOG_DATA)
      public data : any, 
      private router: Router, 
      private requirementService: RequirementService,
      private issueService: IssueService,
      public dialogRef : MatDialogRef<EditRequirementFormComponent>,
    ) {
      this.id = data.id;
    }

  getCurrentRequirement() {
    this.requirementService.readOneRequirement(this.id)
    .subscribe((requirement) => {
      this.requirement = requirement;
      this.createdByUser = requirement.createdByUser.userId;
      this.requirement.createdByUser = this.requirement.createdByUser.firstName + ' ' + this.requirement.createdByUser.lastName;
      this.requirement.createdTime = this.requirement.createdTime.split("T")[0];
      this.requirement.lastModifiedTime = this.requirement.lastModifiedTime.split("T")[0];
      this.requirement.dueDate = this.requirement.dueDate.split("T")[0];

      this.dataAvailable = true;

    })
  }

  getUsers() {
    this.requirementService.getUsers()
    .subscribe(users => {
      this.users = users;
    })
  };

  getIssues() {
    this.issueService.getIssues()
    .subscribe(issues => {
      this.issues = issues;
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }

  editRequirement() {
    this.requirement.title = this.editRequirementForm.value.title;
    this.requirement.description = this.editRequirementForm.value.description;
    this.requirement.dueDate = new Date(this.editRequirementForm.value.dueDate).toISOString().substring(0,19);
    this.requirement.createdTime = new Date().toISOString().substring(0,19);
    this.requirement.lastModifiedTime = new Date().toISOString().substring(0,19);
    this.requirement.dueDate = new Date(this.requirement.dueDate).toISOString().substring(0,19);
    this.requirement.status = this.editRequirementForm.value.status;
    this.requirement.priority = this.editRequirementForm.value.priority;
    this.requirement.comments = [];
    this.requirement.estimatedTime = this.editRequirementForm.value.estimatedTime;
    this.requirement.assignedToUser = this.editRequirementForm.value.assignedToUser.userId;
    this.requirement.createdByUser = this.createdByUser;

    if(this.editRequirementForm.value.relatedIssue == undefined) {
      this.requirement.relatedIssueId = null;
    }
    else {
      this.requirement.relatedIssueId = this.editRequirementForm.value.relatedIssue.issueId;
    }

    this.requirementService.updateRequirement(this.requirement)
      .subscribe(() => {
        this.router.navigate(['/requirements']);
        this.dialogRef.close();
      });
  };

  ngOnInit() {
    this.getUsers();
    this.getIssues();
    this.getCurrentRequirement();
  }

  compareUser(user1: User, user2: User): boolean {
    if (user1 && user2) {
      return user1.userId === user2.userId;
    }
  }

  compareIssue(issue1: Issue, issue2: Issue): boolean {
    if (issue1 && issue2) {
      return issue1.issueId === issue2.issueId;
    }
  }

  };
