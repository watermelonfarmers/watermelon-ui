import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedRequirementsComponent } from './accepted-requirements.component';

describe('AcceptedRequirementsComponent', () => {
  let component: AcceptedRequirementsComponent;
  let fixture: ComponentFixture<AcceptedRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
