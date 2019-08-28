import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private api: ApiService) { }

  getCity(text: string, callback) {
    var paremeters = { "q": text };
    this.api.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete", callback, paremeters);
  }

  getCityWeather(cityID, callback) {
    var paremeters = { "details": false };
    this.api.get("http://dataservice.accuweather.com/currentconditions/v1/" + cityID, callback, paremeters);
  }

  getCityNextDays(cityID, callback) {
    var paremeters = { "details": false };
    this.api.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + cityID, callback, paremeters)
  }
  
}
