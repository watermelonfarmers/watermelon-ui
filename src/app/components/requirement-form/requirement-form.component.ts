import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../../services/requirement.service';
import { requirement } from '../requirements/requirement'
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.css']
})
export class RequirementFormComponent implements OnInit {

  assigned_to: string[] = ['Unassigned', 'User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
  ngForm: NgForm;

  submitted = false;

  newRequirement : requirement = requirement.getDefault();

  constructor(private router : Router, private requirementService: RequirementService) {};

  addRequirement() {
      this.newRequirement.created_time = new Date().toISOString().substring(0,19);
      this.newRequirement.last_modified_time = new Date().toISOString().substring(0,19);
      this.newRequirement.due_date = new Date(this.newRequirement.due_date).toISOString().substring(0,19);
      this.newRequirement.status = 'NEW';
      this.newRequirement.comments = [];
      
       this.requirementService.createRequirement(this.newRequirement)
      .subscribe(() => {this.router.navigate(['/requirements'])});
    }
    
  ngOnInit() {}

}
