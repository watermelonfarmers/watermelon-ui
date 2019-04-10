import { Component, OnInit, Input } from '@angular/core';
import { RequirementService } from '../../../services/requirement.service';
import { Requirement } from '../../../classes/requirement';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { User } from '../../../classes/user';
import { MatDialog } from '@angular/material';
import { RequirementFormComponent } from '../requirement-form/requirement-form.component';
import { EditRequirementFormComponent } from '../edit-requirement-form/edit-requirement-form.component';
import { of, BehaviorSubject } from 'rxjs';
import { Issue } from 'src/app/classes/issue';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})

export class RequirementsComponent implements OnInit {

  constructor(private router : Router, private requirementService: RequirementService, public dialog: MatDialog, private activatedRoute: ActivatedRoute) {


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
  blockedRequirements : Requirement [];
  users: User [];
  issues: Issue [];
  usersLoaded = new BehaviorSubject<boolean>(false);

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
        this.blockedRequirements = this.requirements.filter((requirement) => {
          if((requirement.status === 'BLOCKED') || (requirement.status === 'blocked')) {
            return requirement;
          }
        });
    });
  }

  getUsers() {
    this.requirementService.getUsers()
    .subscribe(users => {
      this.users = users;
      this.usersLoaded.next(true);
    })
  }

  getIssues() {
    this.requirementService.getIssues()
    .subscribe(issues => {
      this.issues = issues;
    })
  }

  ngOnInit() {
    this.getRequirements();
    this.getUsers();

    this.usersLoaded.asObservable().subscribe(result => {
      if (this.activatedRoute.snapshot.params['id'] && result) {
        this.openDetailDialog(this.activatedRoute.snapshot.params['id']);
      }
    })
  }

  openDetailDialog(id): void {
    const dialogRef = this.dialog.open(EditRequirementFormComponent, {
      width : '500px',
      data : {id : id}
    });

  }

  ngOnDestroy() {
    if(this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
