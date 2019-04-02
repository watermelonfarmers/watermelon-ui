import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatFormFieldModule, MatInputModule, MAT_DIALOG_DATA } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule, MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RequirementFormComponent } from './requirement-form.component';
import { RequirementService } from 'src/app/services/requirement.service';
import { MockRequirementService } from 'src/app/testing/mockRequirementService';
import { MatDialogRef } from '@angular/material';

describe('RequirementFormComponent', () => {
  let component: RequirementFormComponent;
  let fixture: ComponentFixture<RequirementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          RouterTestingModule, 
          ReactiveFormsModule,
          MatCardModule,
          MatFormFieldModule,
          MatInputModule,
          MatSelectModule,
          MatNativeDateModule,
          MatDatepickerModule,
          NoopAnimationsModule
        ],
      declarations: [ RequirementFormComponent ],
      providers: [
        {provide: RequirementService, useClass: MockRequirementService},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementFormComponent);
    component = fixture.componentInstance;

    //Will have to remove line for unit testing
    component.getUsers = () => {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/* 
  it('requirement form is invalid when empty', () => {
    expect(component.requirementForm.valid).toBeFalsy();
  })

  it('title is invalid when blank', () => {
    let title = component.requirementForm.controls.title;
    title.setValue('');
    fixture.detectChanges();
    expect(title.valid).toBeFalsy();
  }); 

  it('title is invalid when 25 plus characters', () => {
    let title = component.requirementForm.controls.title;
    title.setValue('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    fixture.detectChanges();
    expect(title.valid).toBeFalsy();
  });
  
  it('title is valid with 25 characters or less', () => {
    let title = component.requirementForm.controls.title;
    title.setValue('XXXXXX');
    fixture.detectChanges();
    expect(title.valid).toBeTruthy();
  });

  it('description is invalid when blank', () => {
    let description = component.requirementForm.controls.description;
    description.setValue('');
    fixture.detectChanges();
    expect(description.valid).toBeFalsy();
  }); 

  it('description is invalid when 100 plus characters', () => {
    let description = component.requirementForm.controls.description;
    description.setValue('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    fixture.detectChanges();
    expect(description.valid).toBeFalsy();
  });
  
  it('description is valid with 100 characters or less', () => {
    let description = component.requirementForm.controls.description;
    description.setValue('XXXXXX');
    fixture.detectChanges();
    expect(description.valid).toBeTruthy();
  });

  it('assigned to is invalid when blank', () => {
    let assigned_to = component.requirementForm.controls.assigned_to;
    assigned_to.setValue('');
    fixture.detectChanges();
    expect(assigned_to.valid).toBeFalsy();
  }); 

  it('assigned to is valid when set to a user', () => {
    let assigned_to = component.requirementForm.controls.assigned_to;
    assigned_to.setValue('User 1');
    fixture.detectChanges();
    expect(assigned_to.valid).toBeTruthy();
  }); 

  it('due date is invalid if it is earlier than the current date', () => {
    let due_date = component.requirementForm.controls.due_date;
    let date = new Date(2000, 0, 1);
    due_date.setValue(date);
    fixture.detectChanges();
    expect(due_date.valid).toBeFalsy();
  });

  it('due date is valid if it is the current date', () => {
    let due_date = component.requirementForm.controls.due_date;
    let date = new Date()
    due_date.setValue(date);
    fixture.detectChanges();
    expect(due_date.valid).toBeTruthy();
  });

  it('due date is valid if it is later than the current date', () => {
    let due_date = component.requirementForm.controls.due_date;
    let date = new Date(5000, 0, 1);
    fixture.detectChanges();
    expect(due_date.valid).toBeFalsy();
  });
 */

});
