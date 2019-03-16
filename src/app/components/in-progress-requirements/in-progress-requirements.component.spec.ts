import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RequirementService } from '../../services/requirement.service';
import { InProgressRequirementsComponent } from './in-progress-requirements.component';
import { MockRequirementService } from '../../testing/mockRequirementService';

describe('InProgressRequirementsComponent', () => {
  let component: InProgressRequirementsComponent;
  let fixture: ComponentFixture<InProgressRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ InProgressRequirementsComponent],
       providers: [{
         provide: RequirementService,
         useClass : MockRequirementService
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
