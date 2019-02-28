import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WatermelonRouter } from './app.router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    WatermelonRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
