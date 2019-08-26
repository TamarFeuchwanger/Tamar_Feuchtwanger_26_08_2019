import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  constructor(private weatherServ:WeatherService) { }

  @Input() city:any;

  //משתנה לקבל את ערכי העיר החדשים
  cityDetails:any;

  ngOnInit() {
    this.getCurrentCityWeather();
    this.getCityNextFiveDays();
  }

getCurrentCityWeather()
{
  this.weatherServ.getCityWeather(this.city.Key,(res) => {
  this.cityDetails=res;
  console.log(res);});  
}

getCityNextFiveDays()
{
  this.weatherServ.getCityNextDays(this.city.Key,(res) => {
    this.cityDetails=res;
    console.log(res);});  
}

closeDetails()
{
  this.city=null;
}

}
