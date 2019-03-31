import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RequirementsComponent } from './components/requirements_folder/requirements/requirements.component';
import { ProfileComponent } from "./components/profile/profile.component";
import { IssuesComponent } from "./components/issues/issues.component";
import { RequirementFormComponent } from './components/requirements_folder/requirement-form/requirement-form.component';
import { EditRequirementFormComponent} from './components/requirements_folder/edit-requirement-form/edit-requirement-form.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'messages',
        component: MessagesComponent
        ,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'requirements',
        component: RequirementsComponent,
        canActivate: [AuthenticationGuard],
        runGuardsAndResolvers: 'always',
    },
    {
        path: 'requirements/add',
        component: RequirementFormComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'requirements/:id',
        component: EditRequirementFormComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'requirements/delete/:id',
        component: RequirementsComponent
    },
    {
        path: 'issues',
        component: IssuesComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }

];

export const WatermelonRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes, {onSameUrlNavigation:'reload'});