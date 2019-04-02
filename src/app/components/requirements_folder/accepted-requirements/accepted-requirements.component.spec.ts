import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RequirementService } from '../../../services/requirement.service';
import { AcceptedRequirementsComponent } from './accepted-requirements.component';
import { MockRequirementService } from '../../../testing/mockRequirementService';
import { MatIconModule, MatIcon } from "@angular/material/icon";
import { MatSelectModule, MatNativeDateModule, MatDialogModule } from '@angular/material';



describe('AcceptedRequirementsComponent', () => {
  let component: AcceptedRequirementsComponent;
  let fixture: ComponentFixture<AcceptedRequirementsComponent>;
  let spy : any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        MatIconModule, 
        MatSelectModule, 
        MatNativeDateModule, 
        MatDialogModule 
      ],
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

    component.deleteRequirement = (id) => {
      return 'requirment' + id + 'deleted';
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should spy on and call deleteRequirment', ()=> {
    let spy = spyOn(component, 'deleteRequirement');
    expect(component.deleteRequirement).toHaveBeenCalled;
  });

});
