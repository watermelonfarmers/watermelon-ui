import { Component, OnInit, Input } from '@angular/core';
import { RequirementService } from '../../services/requirement.service';
import { requirement } from './requirement';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  constructor(private requirementService: RequirementService) {}

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

  deleteRequirement(id: Number) {
    if(confirm('Are you sure you want to delete this requirement?')) {
      console.log(id);
      this.requirementService.deleteRequirement(id).subscribe()}
  }
 
  ngOnInit() {

  }

}
