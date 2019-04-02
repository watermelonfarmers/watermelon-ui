import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RequirementService } from '../../../services/requirement.service';
import { InProgressRequirementsComponent } from './in-progress-requirements.component';
import { MockRequirementService } from '../../../testing/mockRequirementService';
import { MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

describe('InProgressRequirementsComponent', () => {
  let component: InProgressRequirementsComponent;
  let fixture: ComponentFixture<InProgressRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatDialogModule
      ],
      declarations: [ InProgressRequirementsComponent],
       providers: [
         {provide: RequirementService, useClass : MockRequirementService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressRequirementsComponent);
    component = fixture.componentInstance;

    console.log(component);

    component.deleteRequirement = (id) => {
      return 'requirment' + id + 'deleted';
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should spy on deleteRequirment', ()=> {
    let spy = spyOn(component, 'deleteRequirement');
    expect(spy).toHaveBeenCalled;
  });

});
