import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressRequirementsComponent } from './in-progress-requirements.component';

describe('InProgressRequirementsComponent', () => {
  let component: InProgressRequirementsComponent;
  let fixture: ComponentFixture<InProgressRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressRequirementsComponent ]
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
