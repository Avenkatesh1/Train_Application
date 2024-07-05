import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

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
    }
];
