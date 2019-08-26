import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor(private weatherServ:WeatherService) {}

getCurrentCity() {}

ngOnInit() {
  this.weatherServ.isDetails=true;
}

}
