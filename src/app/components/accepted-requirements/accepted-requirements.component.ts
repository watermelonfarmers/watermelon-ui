import { Component, OnInit } from '@angular/core';
import {REQUIREMENTS_TEMP} from '../requirements/mock-requirements';

@Component({
  selector: 'app-accepted-requirements',
  templateUrl: './accepted-requirements.component.html',
  styleUrls: ['./accepted-requirements.component.css']
})
export class AcceptedRequirementsComponent implements OnInit {

  type: String = 'Accepted Requirements';

  requirements = REQUIREMENTS_TEMP;

  constructor() { }

  ngOnInit() {
  }

}
