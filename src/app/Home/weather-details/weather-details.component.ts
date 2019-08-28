import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';
import { Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FavoritesService } from 'src/app/Services/favorites.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  constructor(
    private weatherServ: WeatherService,
    private favoriteServ: FavoritesService) { }

  @Input() city: any;
  @Output() onCanceled: EventEmitter<string> = new EventEmitter<string>();
 
  cityWeather: any;
  cityNextWeather: any ={};
  favorite=true;
 
  ngOnInit()
  {
    this.getCurrentCityWeather();
    this.getCityNextFiveDays();
  }

  getCurrentCityWeather() {
    this.weatherServ.getCityWeather(this.city.Key, (res) => {
      this.cityWeather = res;
    });
  }

  getCityNextFiveDays()
  {
    this.weatherServ.getCityNextDays(this.city.Key, (res) => {
    this.cityNextWeather = res;});
  }

  addCityToFavorites()
  {
    this.favoriteServ.addCityToFavorites(this.city);
  }

  closeDetails()
  {
    this.onCanceled.emit('closed');
  }

  getDay(s:string)
  {
    var stringDate = s;
    var d= new Date(stringDate );
    return d;
  }

}
