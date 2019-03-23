import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RequirementsComponent } from './requirements.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockRequirementService } from '../../testing/mockRequirementService';
import { RequirementService } from '../../services/requirement.service';

describe('RequirementsComponent', () => {
  let component: RequirementsComponent;
  let fixture: ComponentFixture<RequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ RequirementsComponent ],
      providers: [RequirementsComponent, {
        provide: RequirementService,
        useClass : MockRequirementService
       }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsComponent);
    component = fixture.componentInstance;

    //will have to remove this line when writing unit tests, initializes the function
    //as empty to create the component.
    component.getRequirements = ()=>{};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
