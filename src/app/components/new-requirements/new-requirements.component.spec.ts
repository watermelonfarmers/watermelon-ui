import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequirementsComponent } from './new-requirements.component';

describe('NewRequirementsComponent', () => {
  let component: NewRequirementsComponent;
  let fixture: ComponentFixture<NewRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
