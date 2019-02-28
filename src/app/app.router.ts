import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { IssuesComponent } from "./components/issues/issues.component";
import { RequirementFormComponent } from './components/requirement-form/requirement-form.component';
import { EditRequirementFormComponent} from './components/edit-requirement-form/edit-requirement-form.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'messages',
        component: MessagesComponent
    },
    {
        path: 'requirements',
        component: RequirementsComponent
    },
    {
        path: 'requirements/add',
        component: RequirementFormComponent
    },
    {
        path: 'requirements/edit/:id',
        component: EditRequirementFormComponent
    },
    {
        path: 'issues',
        component: IssuesComponent
    }

];

export const WatermelonRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);