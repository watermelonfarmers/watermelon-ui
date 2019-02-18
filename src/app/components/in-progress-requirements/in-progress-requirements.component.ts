import { Component, OnInit } from '@angular/core';
import {REQUIREMENTS_TEMP} from '../requirements/mock-requirements';

@Component({
  selector: 'app-in-progress-requirements',
  templateUrl: './in-progress-requirements.component.html',
  styleUrls: ['./in-progress-requirements.component.css']
})
export class InProgressRequirementsComponent implements OnInit {

  type: String = 'In Progress Requirements';

  requirements = REQUIREMENTS_TEMP;

  constructor() { }

  ngOnInit() {
  }

}
