import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';
import { Router } from '@angular/router';
// import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor(private weatherServ: WeatherService, private router:Router) { }

//I can create a model and get the details of the object that the server return

//הערך שהמשתמש כותב בתיבה עד שהוא מקבל א העיר
  value:string;
  // getCurrentCity() { }
  
  //רשימת ערים שהשרת מחזיר
  cities:[];

 //העיר המסוימת שהמשתמש בחר
  selectedCity:any;

  cityKey:any;
  //לקבל את המזג אויר העכשווי
  currentWether:number;

  ngOnInit() {}

  setAutoCompleate(event) {
  this.weatherServ.getCity(event.query, (cities) => {
    this.cities=cities;
     /* cities.forEach(city => {
        this.cities[city.LocalizedName] = city;
      });*/
    });  
  }

  selectCity(e){
   this.selectCity = e;
   console.log(this.selectCity)
  }

  emptySelectCity()
  {
  this.selectCity=null;
  // this.router.navigate(['/LandingPage/HomePage']);
  //לבדוק את זה
  this.ngOnInit();
  }


}


