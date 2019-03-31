import { Component, OnInit, Input } from '@angular/core';
import { RequirementService } from '../../../services/requirement.service';
import { User } from '../../../classes/user';
import { Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import { RequirementFormComponent } from '../requirement-form/requirement-form.component';
import { EditRequirementFormComponent } from '../edit-requirement-form/edit-requirement-form.component';


@Component({
  selector: 'app-in-progress-requirements',
  templateUrl: './in-progress-requirements.component.html',
  styleUrls: ['./in-progress-requirements.component.css']
})
export class InProgressRequirementsComponent implements OnInit {

  constructor(private router : Router, private requirementService : RequirementService, public dialog: MatDialog) {}

  type: String = 'In Progress Requirements';
  @Input() inProgressRequirements : any;
  @Input() users: User [];

  openDialog(): void {
    const dialogRef = this.dialog.open(RequirementFormComponent, {
      width : '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDetailDialog(id): void {
    const dialogRef = this.dialog.open(EditRequirementFormComponent, {
      width : '500px',
      data : {id : id}
    });

  }

  deleteRequirement(id: Number) {
    if(confirm('Are you sure you want to delete this requirement?')) {
      this.requirementService.deleteRequirement(id).subscribe(() => {this.router.navigate(['/requirements'])});
    }

  }

  ngOnInit() {}

}
