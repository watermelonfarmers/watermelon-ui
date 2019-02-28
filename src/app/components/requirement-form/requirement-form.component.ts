import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../../services/requirement.service';
import { requirement } from '../requirements/requirement'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.css']
})
export class RequirementFormComponent implements OnInit {

  statusOpts: string[] = ['NEW', 'IN PROGRESS', 'ACCEPTED'];
  assignToMember: string[] = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];

  submitted = false;

  newRequirement : requirement = requirement.getDefault();

  constructor(private requirementService: RequirementService) {};

  addRequirement(form) {
      this.newRequirement.created_time = new Date().toISOString().substring(0,19);
      this.newRequirement.last_modified_time = new Date().toISOString().substring(0,19);
      this.newRequirement.due_date = new Date(this.newRequirement.due_date).toISOString().substring(0,19);
    /* this.newRequirement = {
      archived: true,
      created_by_user: 'Temp',
      created_time: new Date().toISOString().substring(0,19),
      description: form.value.description,
      due_date: new Date().toISOString().substring(0,19),
      id: 17,
      last_modified_time: new Date().toISOString().substring(0,19),
      priority: 'ten',
      comments: 'temp',
      assigned_to: form.value.assigned_to, 
      status: form.value.status,
      title: form.value.title,
      url: 'https://www.pivotaltracker.com/story/show/164053311'
    } */


    this.requirementService.createRequirement(this.newRequirement)
      .subscribe(() => {console.log('Requirement Added')});
}

  ngOnInit() {
  }

}
