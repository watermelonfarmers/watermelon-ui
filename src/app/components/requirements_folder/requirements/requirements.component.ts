import { Component, OnInit, Input } from '@angular/core';
import { RequirementService } from '../../../services/requirement.service';
import { Requirement } from '../../../classes/requirement';
import { Router, NavigationEnd } from '@angular/router';
import { User } from '../../../classes/user';
import { MatDialog } from '@angular/material';
import { RequirementFormComponent } from '../requirement-form/requirement-form.component';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})

export class RequirementsComponent implements OnInit {

  constructor(private router : Router, private requirementService: RequirementService, public dialog: MatDialog) {


    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.getRequirements();
      }
    });
  }

  navigationSubscription;
  requirements: any;
  newRequirements: Requirement [];
  inProgressRequirements: Requirement [];
  acceptedRequirements : Requirement [];
  users: User [];

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
    });
  }

  getUsers() {
    this.requirementService.getUsers()
    .subscribe(users => {
      this.users = users;
    })
  }

  ngOnInit() {
    this.getRequirements();
    this.getUsers();
  }

  ngOnDestroy() {
    if(this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
