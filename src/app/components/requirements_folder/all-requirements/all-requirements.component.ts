import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FormGroup, FormControl } from '@angular/forms';
import { Requirement } from 'src/app/classes/requirement';
import { RequirementService } from 'src/app/services/requirement.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { RequirementFormComponent } from '../requirement-form/requirement-form.component';
import { EditRequirementFormComponent } from '../edit-requirement-form/edit-requirement-form.component';

export interface Status {
	value: string;
	viewValue: string;
}

@Component({
  selector: 'app-all-requirements',
  templateUrl: './all-requirements.component.html',
  styleUrls: ['./all-requirements.component.scss']
})
export class AllRequirementsComponent implements OnInit {
  
  status: Status[] = [
		{ value: 'NEW', viewValue: 'New' },
		{ value: 'IN PROGRESS', viewValue: 'In Progress' },
    { value: 'ACCEPTED', viewValue: 'Accepted' },
    { value: 'BLOCKED', viewValue: 'Blocked'}
  ];

  requirementsForm : FormGroup = new FormGroup({
    'statusSelect' : new FormControl('')
  })
  
  public requirements : Array<Requirement>;
  public filter: string;
  public title: string;
  public count: number;


  constructor(private requirementService: RequirementService, private userService: UserService, public dialog: MatDialog, private activatedRoute: ActivatedRoute){ }

  ngOnInit() {
    this.getRequirements();
    console.log('work');
    this.requirementsForm.get('statusSelect').valueChanges.subscribe(value => this.filter = value);

    if (this.activatedRoute.snapshot.params['requirementId']) {
			this.getOneRequirementForNavigation(this.activatedRoute.snapshot.params['requirementId']);
		}
  }

  filteredRequirements() {
    if(this.requirements && this.filter) {
      this.title = this.filter + " REQUIREMENTS";
      let filteredRequirements = this.requirements.filter(item => item.status == this.filter);
      this.count = filteredRequirements.length;
      return filteredRequirements;
    }

    this.title = "All Requirements";
    if(this.requirements){
      this.count = this.requirements.length;
    }
    return this.requirements;
  }

  addNewRequirement(): void {
		let newRequirement: Requirement = {} as Requirement;
		const createRequirementDialog = this.dialog.open(RequirementFormComponent, {
			width: '800px',
			data: { issue: newRequirement, option: "CREATE" }
		});

		/* createRequirementDialog.afterClosed().subscribe(result => {
			if (result) {
				let requirementRequest: RequirementRequest = this.mapIssueToIssueRequest(result);
				this.createIssue(issueRequest);
			}
		}); */
	}

  editRequirement(requirement : Requirement): void {
    const createRequirementDialog = this.dialog.open(EditRequirementFormComponent, {
      width: '70rem',
      data: { requirement : requirement, option : "UPDATE"}
    })

    /* createRequirementDialog.afterClosed().subscribbe(result => {
      if(result) {
        let requirementRequest: RequirementRequest = this.mapIssueToRequirementRequest(result);
				this.updateRequirement(requirementRequest, requirement.requirementId);
			}
			else {
				this.getRequirements();
			}   
    }) */
  }


  getRequirements() : void {

    this.requirementService.readRequirements()
    .subscribe(requirements => {
        this.requirements = requirements;
    }
  )};

  getOneRequirementForNavigation(requirementId: number){
    this.requirementService.readOneRequirement(requirementId).subscribe(result => this.editRequirement(result));
  }


  

}
