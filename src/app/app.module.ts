import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { WatermelonRouter } from './app.router';
import { MaterialModule } from "./app-material.module";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IssuesComponent } from './components/issues/issues.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { NewRequirementsComponent } from './components/new-requirements/new-requirements.component';
import { InProgressRequirementsComponent } from './components/in-progress-requirements/in-progress-requirements.component';
import { AcceptedRequirementsComponent } from './components/accepted-requirements/accepted-requirements.component';
import { RequirementFormComponent } from './components/requirement-form/requirement-form.component';
import { EditRequirementFormComponent } from './components/edit-requirement-form/edit-requirement-form.component';
import { LoginComponent } from "./components/login/login/login.component";
import { RegisterComponent } from "./components/login/register/register.component";
import { UserService } from './services/user.service';
import { ProfileComponent } from './components/profile/profile.component';
import { IssueDialogComponent } from './components/issues/issue-dialog/issue-dialog.component';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    IssuesComponent,
    MessagesComponent,
    RequirementsComponent,
    NewRequirementsComponent,
    InProgressRequirementsComponent,
    AcceptedRequirementsComponent,
    RequirementFormComponent,
    EditRequirementFormComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    IssueDialogComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WatermelonRouter,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [IssuesComponent, IssueDialogComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
