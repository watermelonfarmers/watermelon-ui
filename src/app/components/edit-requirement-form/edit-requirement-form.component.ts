import { Component, OnInit } from '@angular/core';
import { requirement } from '../requirements/requirement'

@Component({
  selector: 'app-edit-requirement-form',
  templateUrl: './edit-requirement-form.component.html',
  styleUrls: ['./edit-requirement-form.component.css']
})
export class EditRequirementFormComponent implements OnInit {

  status: string[] = ['New', 'In-Progress', 'Accepted'];

  assignToMember: string[] = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];

  model = new requirement('Test', 'Test Description', this.status[0], 'User 1', 'User 2');

  submitted = false;

  onSubmit() {this.submitted = true};

  editRequirement() {
    
  }

  constructor() { }

  ngOnInit() {
  }

}
