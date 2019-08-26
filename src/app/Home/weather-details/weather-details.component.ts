import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  constructor(private weatherServ:WeatherService) { }

  closeDetails()
  {
  this.weatherServ.isDetails=false;
  }

  ngOnInit() {
    
  }



}
