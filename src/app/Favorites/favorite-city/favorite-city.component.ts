import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-favorite-city',
  templateUrl: './favorite-city.component.html',
  styleUrls: ['./favorite-city.component.scss']
})
export class FavoriteCityComponent implements OnInit {

  constructor(private weatherServ: WeatherService) { }

  @Input() city: any; 

 specificCity: any ={};

  ngOnInit() 
  {
    this.getCurrentCityWeather();
  }

  getCurrentCityWeather() 
  {
  this.weatherServ.getCityWeather(this.city.Key, (res) => {
  this.specificCity = res[0];
  });

  }

}
