import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../../services/requirement.service';
import { requirement } from './requirement';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  constructor(private requirementService: RequirementService) {
    /* this.parseRequirements(); */
  }

  requirements: any;
  newRequirements: requirement [];
  inProgressRequirements: requirement [];
  acceptedRequirements : requirement [];
  isDataAvailable : boolean = false;


  getRequirements() : void {
    this.requirementService.readRequirements()
    .subscribe(requirements => {
        this.requirements = requirements;
        
        this.newRequirements = this.requirements.filter((requirement) => {
          if((requirement.status === 'NEW') || (requirement.status === 'new')) {
            return requirement;
          }
        });

        this.inProgressRequirements = this.requirements.filter((requirement) => {
          if((requirement.status === 'IN PROGRESS') || (requirement.status === 'in progress')) {
            return requirement;
          }
        });

        this.acceptedRequirements = this.requirements.filter((requirement) => {
          if((requirement.status === 'ACCEPTED') || (requirement.status === 'accepted')) {
            return requirement;
          }
        });

        this.isDataAvailable = true;
    });
  }


  /* newRequirements: requirement [] = [];
  inProgressRequirements: requirement [] = [];
  acceptedRequirements: requirement [] = []; */

  /*  parseRequirements() {
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

        for(let i =0; i < data.length; i ++) {
          if((data[i].status === 'NEW') || (data[i].status === 'new')) {
            this.newRequirements.push(data[i])
          }
          if((data[i].status === 'IN PROGRESS') || (data[i].status === 'in progress')) {
            this.inProgressRequirements.push(data[i])
          }
          if((data[i].status === 'ACCEPTED') || (data[i].status === 'accepted')) {
            this.acceptedRequirements.push(data[i])
          }
        }
      }
  )} */

  ngOnInit() {
    //this.getRequirements();
  }

}
