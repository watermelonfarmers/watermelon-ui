import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Requirement } from '../../../classes/requirement'
import { RequirementService } from '../../../services/requirement.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from '../../../classes/user';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-requirement-form',
  templateUrl: './edit-requirement-form.component.html',
  styleUrls: ['./edit-requirement-form.component.scss']
})
export class EditRequirementFormComponent implements OnInit {


  statusOpts: string[] = ['NEW', 'IN PROGRESS', 'ACCEPTED', 'BLOCKED'];
  priority : string [] = ['NORMAL', 'URGENT', 'VERY URGENT']
  users: User [];
  currentDate : Date = new Date();
  dataAvailable : boolean = false;
  createdBy : User;

  requirement : Requirement;
  //id : Number = Number(this.route.params['value'].id);
  id : Number;

  editRequirementForm : FormGroup = new FormGroup({
    'title': new FormControl('', [Validators.required, Validators.maxLength(25)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'status' : new FormControl('', Validators.required),
    'priority' : new FormControl('', Validators.required),
    'assignedToUser': new FormControl('', Validators.required),
    'createdByUser' : new FormControl('', Validators.required),
    'dueDate' : new FormControl('', Validators.required)
  });


  constructor(
      @Inject(MAT_DIALOG_DATA)
      public data : any, 
      private router: Router, 
      private requirementService: RequirementService,
      public dialogRef : MatDialogRef<EditRequirementFormComponent>,
    ) {
      this.id = data.requirement.id;
    }

  getCurrentRequirement() {
    this.requirementService.readOneRequirement(this.id)
    .subscribe((requirement) => {
      this.requirement = requirement;
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

  editRequirement() {
    this.requirement.title = this.editRequirementForm.value.title;
    this.requirement.description = this.editRequirementForm.value.description;
    this.requirement.assignedToUser = this.editRequirementForm.value.assignedToUser.userId;
    this.requirement.dueDate = new Date(this.editRequirementForm.value.dueDate).toISOString().substring(0,19);
    this.requirement.createdTime = new Date().toISOString().substring(0,19);
    this.requirement.lastModifiedTime = new Date().toISOString().substring(0,19);
    this.requirement.dueDate = new Date(this.requirement.dueDate).toISOString().substring(0,19);
    this.requirement.status = this.editRequirementForm.value.status;
    this.requirement.priority = this.editRequirementForm.value.priority;
    this.requirement.comments = [];
    this.requirement.createdByUser = this.requirement.createdByUser.userId;

    this.requirementService.updateRequirement(this.requirement)
      .subscribe(() => {
        this.router.navigate(['/requirements']);
        this.dialogRef.close();
      });
  };

  ngOnInit() {
    this.getUsers();
    this.getCurrentRequirement();
  }

  };
