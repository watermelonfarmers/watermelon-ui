import { Component, OnInit, Input } from '@angular/core';
import { RequirementService } from '../../services/requirement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accepted-requirements',
  templateUrl: './accepted-requirements.component.html',
  styleUrls: ['./accepted-requirements.component.css']
})
export class AcceptedRequirementsComponent implements OnInit {
  
  constructor(private router : Router, private requirementService : RequirementService) {}

  type: String = 'New Requirements';
  @Input() acceptedRequirements : any;

  deleteRequirement(id: Number) {
    if(confirm('Are you sure you want to delete this requirement?')) {
      this.requirementService.deleteRequirement(id).subscribe(() => {this.router.navigate(['/requirements'])});
    }

  }

  ngOnInit() {}


}
