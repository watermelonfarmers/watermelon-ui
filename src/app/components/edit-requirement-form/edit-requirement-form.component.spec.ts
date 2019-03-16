import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { EditRequirementFormComponent } from './edit-requirement-form.component';
import { RequirementService } from 'src/app/services/requirement.service';
import { MockRequirementService } from 'src/app/testing/mockRequirementService';

describe('EditRequirementFormComponent', () => {
  let component: EditRequirementFormComponent;
  let fixture: ComponentFixture<EditRequirementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ EditRequirementFormComponent ],
      providers: [{
        provide: RequirementService,
        useClass : MockRequirementService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRequirementFormComponent);
    component = fixture.componentInstance;

    //will have to remove this line when writing unit tests, initializes the function
    //as empty to create the component.
    component.getCurrentRequirement = () => {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
