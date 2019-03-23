import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RequirementService } from '../../services/requirement.service';
import { AcceptedRequirementsComponent } from './accepted-requirements.component';
import { MockRequirementService } from '../../testing/mockRequirementService';

describe('AcceptedRequirementsComponent', () => {
  let component: AcceptedRequirementsComponent;
  let fixture: ComponentFixture<AcceptedRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ AcceptedRequirementsComponent],
       providers: [{
         provide: RequirementService,
         useClass : MockRequirementService
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
