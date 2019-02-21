import { Component, OnInit } from '@angular/core';
import { requirement } from '../requirements/requirement'

@Component({
  selector: 'app-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.css']
})
export class RequirementFormComponent implements OnInit {

  status: string[] = ['New', 'In-Progress', 'Accepted'];

  assignToMember: string[] = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];

  model = new requirement('Test', 'Test Description', this.status[0], 'User 1', 'User 2');

  submitted = false;

  onSubmit() {this.submitted = true};

  addRequirement() {
    this.model = new requirement('Test', 'Test Description', this.status[0], 'User1', 'User 2');
    console.log(this.model);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
