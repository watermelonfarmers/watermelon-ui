import { Component, OnInit } from '@angular/core';
import { RequirementsComponent } from '../requirements/requirements.component';
import { RequirementService } from '../../services/requirement.service';

@Component({
  selector: 'app-new-requirements',
  templateUrl: './new-requirements.component.html',
  styleUrls: ['./new-requirements.component.css']
})
export class NewRequirementsComponent extends RequirementsComponent implements OnInit {

  constructor(requirementService : RequirementService) {
    super(requirementService);
  }

  type: String = 'New Requirements';
  isDataAvailable = false;

  /* displayNewRequirements() {
    this.newRequirements = this.requirements.map((requirement) => {
      if((requirement.status == 'NEW') || (requirement.status == 'new')) {
        return requirement;
      }
    })
  } */

/* 
  deleteRequirement(id) {
    let delete_req = confirm('Are you sure you want to delete this requirement?');

    if(delete_req) {
      this.requirementService.deleteRequirement(id)
    }
  } */

  ngOnInit() {
    this.getRequirements();
  }

}
