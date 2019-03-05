import { Component, OnInit, Input } from '@angular/core';
import { RequirementsComponent } from '../requirements/requirements.component';
import { RequirementService } from '../../services/requirement.service';
import { requirement } from '../requirements/requirement';

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
 // @Input() requirement : requirement;

  ngOnInit() {
    this.getRequirements();

  }

}
