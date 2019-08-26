import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private weatherServ: WeatherService) { }
  val:string;
  getCurrentCity() { }
  //cities: [{ [key: string]: any }];
  cities:[];
  selectedCity:any;
  ngOnInit() {
    this.weatherServ.isDetails = true;
  }
  setAutoCompleate(event) {
    this.weatherServ.getCity(event.query, (cities) => {
      this.cities =cities;
     /* cities.forEach(city => {
        this.cities[city.LocalizedName] = city;
      });*/

    });
    
  }
  selectCity(e){
   this.selectCity =e;
  }

}
