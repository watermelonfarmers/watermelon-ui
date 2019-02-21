import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequirementFormComponent } from './edit-requirement-form.component';

describe('EditRequirementFormComponent', () => {
  let component: EditRequirementFormComponent;
  let fixture: ComponentFixture<EditRequirementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRequirementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRequirementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
