import { Component, OnInit } from '@angular/core';
import { RequirementsComponent } from '../requirements/requirements.component';
import { RequirementService } from '../../services/requirement.service';

@Component({
  selector: 'app-accepted-requirements',
  templateUrl: './accepted-requirements.component.html',
  styleUrls: ['./accepted-requirements.component.css']
})
export class AcceptedRequirementsComponent extends RequirementsComponent implements OnInit {
  
  constructor(requirementService : RequirementService) {
    super(requirementService);
  }

  type: String = 'Accepted Requirements';
  isDataAvailable = false;

  ngOnInit() {
    this.getRequirements();
  }

}
