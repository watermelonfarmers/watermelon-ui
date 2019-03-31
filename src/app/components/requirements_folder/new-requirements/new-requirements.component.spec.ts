import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RequirementService } from '../../../services/requirement.service';
import { NewRequirementsComponent } from './new-requirements.component';
import { MockRequirementService } from '../../../testing/mockRequirementService';
 
describe('NewRequirementsComponent', () => {
  let component: NewRequirementsComponent;
  let fixture: ComponentFixture<NewRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ NewRequirementsComponent],
       providers: [{
         provide: RequirementService,
         useClass : MockRequirementService
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRequirementsComponent);
    component = fixture.componentInstance;

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

  it('should call deleteRequirement', () => {
    let id = 2;
    let spy = spyOn(component, 'deleteRequirement').and.returnValue('requirement 2 deleted');
    expect(component.deleteRequirement(id)).toEqual('requirement 2 deleted');
  })

});
