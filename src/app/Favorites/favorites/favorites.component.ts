import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FavoritesService } from 'src/app/Services/favorites.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

citiesArr: { Key:string,Name:string }[] =[];

constructor(private favoriteServ: FavoritesService) { }

ngOnInit() {
  this.citiesArr = this.favoriteServ.favorites;
}

}
