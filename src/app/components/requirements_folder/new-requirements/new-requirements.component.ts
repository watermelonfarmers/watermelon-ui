import { Component, OnInit, Input } from '@angular/core';
import { RequirementService } from '../../../services/requirement.service';
import { Router} from '@angular/router';
import { User } from 'src/app/classes/user';
import { MatDialog } from '@angular/material';
import { RequirementFormComponent } from '../requirement-form/requirement-form.component';
import { EditRequirementFormComponent } from '../edit-requirement-form/edit-requirement-form.component';
import { Issue } from 'src/app/classes/issue';


@Component({
  selector: 'app-new-requirements',
  templateUrl: './new-requirements.component.html',
  styleUrls: ['./new-requirements.component.css']
})
export class NewRequirementsComponent implements OnInit {

  constructor(private router : Router, private requirementService : RequirementService, public dialog: MatDialog) {}

  type: String = 'New Requirements';
  @Input() newRequirements : any;
  @Input() users: User [];
  @Input() issues: Issue [];

  openDialog(): void {
    const dialogRef = this.dialog.open(RequirementFormComponent, {
      width : '500px'
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
