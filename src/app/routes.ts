import { Routes } from '@angular/router';
import { LandingPageComponent } from './General/landing-page/landing-page.component';
import { HomeComponent } from './Home/home/home.component';
import { WeatherDetailsComponent } from './Home/weather-details/weather-details.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ErroePageComponent } from './General/erroe-page/erroe-page.component';

export const LandingRoutes:Routes=
[
    { path:'',redirectTo:'/LandingPage/HomePage', pathMatch: 'full'},
    { path:'LandingPage',component:LandingPageComponent,
    children:
    [
        { path: 'HomePage',  component:HomeComponent},
        { path: 'WeatherDetails',  component:WeatherDetailsComponent},
        { path: 'Favorites', component:FavoritesComponent}, 
        { path: 'ErrorPage', component:ErroePageComponent},
        // { path: 'ResetPassword',component:ResetPasswordComponent},
        // { path: 'TermsAndConditions', component:TermsAndConditionsComponent},
        // { path: 'ProfileImage', component:ProfileImageComponent}
    ]},
]