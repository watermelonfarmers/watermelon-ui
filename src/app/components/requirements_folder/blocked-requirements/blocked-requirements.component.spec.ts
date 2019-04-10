import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedRequirementsComponent } from './blocked-requirements.component';

describe('BlockedRequirementsComponent', () => {
  let component: BlockedRequirementsComponent;
  let fixture: ComponentFixture<BlockedRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
