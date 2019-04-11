import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequirementsComponent } from './all-requirements.component';

describe('AllRequirementsComponent', () => {
  let component: AllRequirementsComponent;
  let fixture: ComponentFixture<AllRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
