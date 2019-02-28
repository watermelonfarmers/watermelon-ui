import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { requirement } from '../requirements/requirement'
import { RequirementService } from '../../services/requirement.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-edit-requirement-form',
  templateUrl: './edit-requirement-form.component.html',
  styleUrls: ['./edit-requirement-form.component.css']
})
export class EditRequirementFormComponent implements OnInit {

  statusOpts: string[] = ['NEW', 'IN PROGRESS', 'ACCEPTED'];
  assigned_to: string[] = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
  submitted = false;

  requirement = requirement.getDefault();

  id : Number = Number(this.route.params['value'].id);

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private requirementService: RequirementService
    ) {}


  ngOnInit() {
    this.requirementService.readRequirements()
      .subscribe((data: any) => {
        data = data.map((requirement) => {
          return {
            title: requirement.title,
            description: requirement.description,
            id: requirement.id,
            created_time: requirement.created_time,
            last_modified_time: requirement.last_modified_time,
            priority: requirement.priority,
            status: requirement.status,
            created_by_user: requirement.created_by_user,
            due_date: requirement.due_date,
            comments: requirement.comments,
            assignedTo: requirement.assigned_to
          }
        })

        for(let i =0; i< data.length; i++) {
          if(data[i].id === this.id){
            this.requirement = data[i];
          }
        }
      }
    )}

    editRequirement(form) {

      this.requirementService.updateRequirement(this.requirement)
        .subscribe(() => {console.log('Requirement Updated')});
    };

  };
