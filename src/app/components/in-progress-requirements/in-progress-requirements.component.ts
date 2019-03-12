import { Component, OnInit, Input } from '@angular/core';
import { RequirementService } from '../../services/requirement.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-in-progress-requirements',
  templateUrl: './in-progress-requirements.component.html',
  styleUrls: ['./in-progress-requirements.component.css']
})
export class InProgressRequirementsComponent implements OnInit {

  constructor(private router : Router, private requirementService : RequirementService) {}

  type: String = 'In Progress Requirements';
  @Input() inProgressRequirements : any;

  deleteRequirement(id: Number) {
    if(confirm('Are you sure you want to delete this requirement?')) {
      this.requirementService.deleteRequirement(id).subscribe(() => {this.router.navigate(['/requirements'])});
    }

  }

  ngOnInit() {}

}
