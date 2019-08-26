import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  isDetails: boolean;

  constructor(private api: ApiService) { }


  getCity(text: string, callback) {

    var paremeters = { "q": text };
    this.api.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete", callback, paremeters);
  }
}
