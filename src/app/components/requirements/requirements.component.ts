import { Component, OnInit, Input } from '@angular/core';
import { RequirementService } from '../../services/requirement.service';
import { requirement } from './requirement';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  constructor(private router : Router, private requirementService: RequirementService) {


    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.getRequirements();
      }
    });
  }

  navigationSubscription;
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
 
  ngOnInit() {
    this.getRequirements();
  }

  ngOnDestroy() {
    if(this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
