import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { requirement } from '../requirements/requirement'
import { RequirementService } from '../../services/requirement.service';
import { switchMap } from 'rxjs/operators';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit-requirement-form',
  templateUrl: './edit-requirement-form.component.html',
  styleUrls: ['./edit-requirement-form.component.css']
})
export class EditRequirementFormComponent implements OnInit {

  statusOpts: string[] = ['NEW', 'IN PROGRESS', 'ACCEPTED'];
  assigned_to: string[] = ['Unassigned','User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
  submitted = false;
  ngForm: NgForm;

  requirement = requirement.getDefault();

  id : Number = Number(this.route.params['value'].id);

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private requirementService: RequirementService
    ) {}


  ngOnInit() {
    this.requirementService.readOneRequirement(this.id)
    .subscribe((requirement) => {
      this.requirement = requirement;

      this.requirement.created_time = this.requirement.created_time.split("T")[0];
      this.requirement.last_modified_time = this.requirement.last_modified_time.split("T")[0];
      this.requirement.due_date = this.requirement.due_date.split("T")[0];
    })

  }

    editRequirement() {
      this.requirement.created_time = new Date(this.requirement.created_time).toISOString().substring(0,19);
      this.requirement.last_modified_time = new Date(this.requirement.last_modified_time).toISOString().substring(0,19);
      this.requirement.due_date = new Date(this.requirement.due_date).toISOString().substring(0,19);
      
      console.log(this.requirement);

      this.requirementService.updateRequirement(this.requirement)
        .subscribe(() => {console.log('Requirement Updated')});
    };

  };
