import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"Home",
        pathMatch:"full"
    },
    {
        path:"Home",
        component:HomeComponent
    },
    {
        path:"Search/:formStationId/:toStationId/:dateOfTravel",
        component:SearchComponent
    },
    {
        path:"Login",
        component:LoginComponent
    },
    {
        path:"Register",
        component:RegisterComponent
    }
];
