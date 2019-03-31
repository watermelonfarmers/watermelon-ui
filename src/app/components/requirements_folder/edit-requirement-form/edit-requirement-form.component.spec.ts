import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatFormFieldModule, MatInputModule, MAT_DIALOG_SCROLL_STRATEGY_FACTORY } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatSelectModule, MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EditRequirementFormComponent } from './edit-requirement-form.component';
import { RequirementService } from 'src/app/services/requirement.service';
import { MockRequirementService } from 'src/app/testing/mockRequirementService';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';

describe('EditRequirementFormComponent', () => {
  let component: EditRequirementFormComponent;
  let fixture: ComponentFixture<EditRequirementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSelectModule,
        MatNativeDateModule,
        MatDatepickerModule,
        NoopAnimationsModule,
      ],
      declarations: [ EditRequirementFormComponent ],
      providers: [
        { provide: RequirementService, useClass : MockRequirementService},
        { provide: MAT_DIALOG_DATA, useValue : {}},
        { provide: MatDialogRef, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRequirementFormComponent);
    component = fixture.componentInstance;

    //Will have to remove line for unit testing
    component.getUsers = ()=> {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('edit requirement form is invalid when empty', () => {
    expect(component.editRequirementForm.valid).toBeFalsy();
  })

  it('title is invalid when blank', () => {
    let title = component.editRequirementForm.controls.title;
    title.setValue('');
    fixture.detectChanges();
    expect(title.valid).toBeFalsy();
  }); 

  it('title is invalid when 25 plus characters', () => {
    let title = component.editRequirementForm.controls.title;
    title.setValue('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    fixture.detectChanges();
    expect(title.valid).toBeFalsy();
  });
  
  it('title is valid with 25 characters or less', () => {
    let title = component.editRequirementForm.controls.title;
    title.setValue('XXXXXX');
    fixture.detectChanges();
    expect(title.valid).toBeTruthy();
  });

  it('description is invalid when blank', () => {
    let description = component.editRequirementForm.controls.description;
    description.setValue('');
    fixture.detectChanges();
    expect(description.valid).toBeFalsy();
  }); 

  it('description is invalid when 100 plus characters', () => {
    let description = component.editRequirementForm.controls.description;
    description.setValue('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    fixture.detectChanges();
    expect(description.valid).toBeFalsy();
  });
  
  it('description is valid with 100 characters or less', () => {
    let description = component.editRequirementForm.controls.description;
    description.setValue('XXXXXX');
    fixture.detectChanges();
    expect(description.valid).toBeTruthy();
  });

  it('status is invalid when blank', () => {
    let status = component.editRequirementForm.controls.status;
    status.setValue('');
    fixture.detectChanges();
    expect(status.valid).toBeFalsy();
  });

  it('status is valid when set to NEW', () => {
    let status = component.editRequirementForm.controls.status;
    status.setValue('NEW');
    fixture.detectChanges();
    expect(status.valid).toBeTruthy();
  });

  it('status is valid when set to IN PROGRESS', () => {
    let status = component.editRequirementForm.controls.status;
    status.setValue('IN PROGRESS');
    fixture.detectChanges();
    expect(status.valid).toBeTruthy();
  });

  it('status is valid when set to ACCEPTED', () => {
    let status = component.editRequirementForm.controls.status;
    status.setValue('ACCEPTED');
    fixture.detectChanges();
    expect(status.valid).toBeTruthy();
  });

  it('assigned to is invalid when blank', () => {
    let assigned_to = component.editRequirementForm.controls.assigned_to;
    assigned_to.setValue('');
    fixture.detectChanges();
    expect(assigned_to.valid).toBeFalsy();
  }); 

  it('assigned to is valid when set to a user', () => {
    let assigned_to = component.editRequirementForm.controls.assigned_to;
    assigned_to.setValue('User 1');
    fixture.detectChanges();
    expect(assigned_to.valid).toBeTruthy();
  }); 

  it('due date is invalid if it is earlier than the current date', () => {
    let due_date = component.editRequirementForm.controls.due_date;
    let date = new Date(2000, 0, 1);
    due_date.setValue(date);
    fixture.detectChanges();
    expect(due_date.valid).toBeFalsy();
  });

  it('due date is valid if it is the current date', () => {
    let due_date = component.editRequirementForm.controls.due_date;
    let date = new Date()
    due_date.setValue(date);
    fixture.detectChanges();
    expect(due_date.valid).toBeTruthy();
  });

  it('due date is valid if it is later than the current date', () => {
    let due_date = component.editRequirementForm.controls.due_date;
    let date = new Date(5000, 0, 1);
    due_date.setValue(date);
    fixture.detectChanges();
    expect(due_date.valid).toBeTruthy();
  });

});
