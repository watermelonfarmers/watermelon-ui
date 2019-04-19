import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatListModule, MatDialogModule, MatIconModule, MatTooltipModule } from "@angular/material";

import { IssuesComponent } from './issues.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';


describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatListModule,
        MatDialogModule,
        MatIconModule,
        MatTooltipModule,
        RouterModule.forRoot([])
      ],
      declarations: [ IssuesComponent, DateFormatPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
