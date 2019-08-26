import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router:Router) { }

  private API_KEY = "GibikUWyxLFwd5eDuWKoIJeByjPcWeiQ";

  get(url: string, sucsses, params: { [id: string]: any }= {}) 
  {
  var parametrs = new HttpParams();
  parametrs = parametrs.set('apikey', this.API_KEY);
  for (let key in params) {
   parametrs = parametrs.set(key, params[key]);
  }
    this.http.get(url, { params: parametrs }).subscribe(
      res => 
      {
      sucsses(res),
      console.log(res)
      },
      err =>
      console.log("error")
      //this.router.navigate(['/LandingPage/ErrorPage'])
    );
  }

  
}
