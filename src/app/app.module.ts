import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './General/navbar/navbar.component';
import { LandingRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { WeatherDetailsComponent } from './Home/weather-details/weather-details.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './Services/weather.service';
import { FooterComponent } from './General/footer/footer.component';
import { FavoriteCityComponent } from './Favorites/favorite-city/favorite-city.component';
import { AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule} from '@angular/forms'
import { ApiService} from './Services/api.service';
import { CookieService} from 'ngx-cookie-service';
import { FavoritesComponent } from './Favorites/favorites/favorites.component';
import { LandingPageComponent } from './General/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WeatherDetailsComponent,

    FooterComponent,
    FavoriteCityComponent,
    FavoritesComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot( LandingRoutes),
    FormsModule,
    AutoCompleteModule,
    BrowserAnimationsModule
    
  ],
  providers: [ApiService,WeatherService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
