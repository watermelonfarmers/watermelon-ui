import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatFormFieldModule, MatSnackBarModule, MatInputModule } from "@angular/material";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [ 
        LoginComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('username should be invalid when blank', ()  => {
    let username = component.loginForm.controls['username'];
    username.setValue('')
    fixture.detectChanges();
    expect(username.valid).toBeFalsy();
  });

  it('username should be invalid when twenty one plus characters', ()  => {
    let username = component.loginForm.controls['username'];
    username.setValue('XXXXXXXXXXXXXXXXXXXXX')
    fixture.detectChanges();
    expect(username.valid).toBeFalsy();
  });

  it('username should be valid when twenty characters or less ', ()  => {
    let username = component.loginForm.controls['username'];
    username.setValue('spiderman')
    fixture.detectChanges();
    expect(username.valid).toBeTruthy();
  });

  it('password should be invalid when blank', ()  => {
    let password = component.loginForm.controls['password'];
    password.setValue('')
    fixture.detectChanges();
    expect(password.valid).toBeFalsy();
  });

  it('password should be invalid when twenty one plus characters', ()  => {
    let password = component.loginForm.controls['password'];
    password.setValue('XXXXXXXXXXXXXXXXXXXXX')
    fixture.detectChanges();
    expect(password.valid).toBeFalsy();
  });

  it('password should be valid when twenty or less characters', ()  => {
    let password = component.loginForm.controls['password'];
    password.setValue('XXXXXXXXXXXXXXXXXXXX')
    fixture.detectChanges();
    expect(password.valid).toBeTruthy();
  });

  it('form should be valid when all fields are filled out correctly', ()  => {
    let password = component.loginForm.controls['password'];
    let username = component.loginForm.controls['username'];
    username.setValue("cap")
    password.setValue('1234');
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeTruthy();
  });
});
