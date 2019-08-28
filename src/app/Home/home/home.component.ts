import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private weatherServ: WeatherService,
  ) { }

 string;
 cities: [];
 city: any;
 currentWether: number;
 value:any;

ngOnInit()
{ }

setAutoCompleate(event)
{
this.weatherServ.getCity(event.query, (cities) => {
this.cities = cities;});
}

selectCity(e) 
{
  this.city = e;
}

emptySelectedCity()
{
this.city = null;
}

}


