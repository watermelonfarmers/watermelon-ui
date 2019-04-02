import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDialogComponent } from './issue-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('IssueDialogComponent', () => {
  let component: IssueDialogComponent;
  let fixture: ComponentFixture<IssueDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatDialogModule,
        MatInputModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ],
      declarations: [IssueDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {issue: {title:"something"}} }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
