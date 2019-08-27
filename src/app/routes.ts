import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { WeatherDetailsComponent } from './Home/weather-details/weather-details.component';
import { FavoritesComponent } from './Favorites/favorites/favorites.component';
import { LandingPageComponent } from './General/landing-page/landing-page.component';


export const LandingRoutes:Routes=
[
    { path:'',redirectTo:'/LandingPage/HomePage', pathMatch: 'full'},
    { path:'LandingPage',component:LandingPageComponent,
    children:
    [
        { path: 'HomePage',  component:HomeComponent},
        { path: 'WeatherDetails',  component:WeatherDetailsComponent},
        { path: 'Favorites', component:FavoritesComponent}, 
  
    ]},
]