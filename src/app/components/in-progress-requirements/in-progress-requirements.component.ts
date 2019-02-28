import { Component, OnInit } from '@angular/core';
import { RequirementsComponent } from '../requirements/requirements.component';
import { RequirementService } from '../../services/requirement.service';

@Component({
  selector: 'app-in-progress-requirements',
  templateUrl: './in-progress-requirements.component.html',
  styleUrls: ['./in-progress-requirements.component.css']
})
export class InProgressRequirementsComponent extends RequirementsComponent implements OnInit {

  constructor(requirementService : RequirementService) {
    super(requirementService);
  }

  type: String = 'In Progress Requirements';
  isDataAvailable = false;

  ngOnInit() {
    this.getRequirements();
  }

}
