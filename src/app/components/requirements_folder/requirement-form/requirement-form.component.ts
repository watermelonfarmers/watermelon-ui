import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../../../services/requirement.service';
import { Requirement } from '../../../classes/requirement'
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router} from '@angular/router';
import { User } from '../../../classes/user';
import { MatDialogRef } from '@angular/material';
import { Issue } from 'src/app/classes/issue';
import { IssueService } from 'src/app/services/issue.service';


@Component({
  selector: 'app-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.scss']
})
export class RequirementFormComponent implements OnInit {

  users: User [];
  issues : Issue [];
  priority : string [] = ['NORMAL', 'URGENT', 'VERY URGENT'];
  estimate : string [] = ['ONE WEEK', 'TWO WEEKS', 'THREE WEEKS', 'MORE THAN THREE WEEKS'];
  currentDate = new Date();


  requirementForm: FormGroup = new FormGroup({
    'title': new FormControl('', [Validators.required, Validators.maxLength(25)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'priority' : new FormControl('', Validators.required),
    'assignedToUser': new FormControl('', Validators.required),
    'relatedIssue' : new FormControl(''),
    'estimatedTime' : new FormControl(''),
    'dueDate' : new FormControl('', Validators.required)
  });

  newRequirement : Requirement = new Requirement();

  currentUser = JSON.parse(sessionStorage.getItem('user'));

  constructor(private router : Router, private requirementService: RequirementService, private issueService: IssueService,
    public dialogRef : MatDialogRef<RequirementFormComponent>) {};

  addRequirement() {
      this.newRequirement.title = this.requirementForm.value.title;
      this.newRequirement.description = this.requirementForm.value.description;
      this.newRequirement.priority = this.requirementForm.value.priority;
      this.newRequirement.assignedToUser = this.requirementForm.value.assignedToUser.userId;
      this.newRequirement.createdByUser = this.currentUser.userId;
      this.newRequirement.dueDate = new Date(this.requirementForm.value.dueDate).toISOString().substring(0,19);
      this.newRequirement.createdTime = new Date().toISOString().substring(0,19);
      this.newRequirement.lastModifiedTime = new Date().toISOString().substring(0,19);
      this.newRequirement.dueDate = new Date(this.newRequirement.dueDate).toISOString().substring(0,19);
      this.newRequirement.status = 'NEW';
      this.newRequirement.comments = [];
      this.newRequirement.relatedIssueId = this.requirementForm.value.relatedIssue.issueId;
      this.newRequirement.estimatedTime = this.requirementForm.value.estimatedTime;

      console.log(this.newRequirement);

       this.requirementService.createRequirement(this.newRequirement)
      .subscribe(() => {
        this.router.navigate(['/requirements']);
        this.dialogRef.close();
      }
    )};

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
    
  ngOnInit() {
    this.getUsers();
    this.getIssues();
  }

}
