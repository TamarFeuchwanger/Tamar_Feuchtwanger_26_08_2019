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

  //I can create a model and get the details of the object that the server return

 string;
 cities: [];
 city: any;
 currentWether: number;

 ngOnInit() { }

setAutoCompleate(event)
{
this.weatherServ.getCity(event.query, (cities) => {
this.cities = cities;});
}

selectCity(e) 
{
  this.city = e;
  console.log(this.selectCity)
}

emptySelectedCity()
{
this.city = null;
}

}


