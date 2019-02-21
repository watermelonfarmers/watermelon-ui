import { Component, OnInit } from '@angular/core';
import {REQUIREMENTS_TEMP} from '../requirements/mock-requirements';

@Component({
  selector: 'app-new-requirements',
  templateUrl: './new-requirements.component.html',
  styleUrls: ['./new-requirements.component.css']
})
export class NewRequirementsComponent implements OnInit {

  type: String = 'New Requirements';

  requirements = REQUIREMENTS_TEMP;

  constructor() { }

  ngOnInit() {
  }

  addRequirements(): void {
    window.location.href = '/requirements/add';
  }

}
