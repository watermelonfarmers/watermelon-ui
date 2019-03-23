import { Component, OnInit, Input } from '@angular/core';
import { RequirementService } from '../../services/requirement.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-new-requirements',
  templateUrl: './new-requirements.component.html',
  styleUrls: ['./new-requirements.component.css']
})
export class NewRequirementsComponent implements OnInit {

  constructor(private router : Router, private requirementService : RequirementService) {}

  type: String = 'New Requirements';
  @Input() newRequirements : any;

  deleteRequirement(id: Number) {
    if(confirm('Are you sure you want to delete this requirement?')) {
      this.requirementService.deleteRequirement(id).subscribe(() => {this.router.navigate(['/requirements'])});
    }

  }

  ngOnInit() {}

}
