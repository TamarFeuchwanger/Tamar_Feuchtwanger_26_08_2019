import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

constructor(private cookiesService: CookieService) {
  var f = this.cookiesService.get('favorites');
  this.favorites = f ? JSON.parse(f) : [];
}

favorites: { Key: string, Name: string }[];


addCityToFavorites(city: any) {
  this.favorites.push({ Key: city.Key, Name: city.LocalizedName });
  this.cookiesService.set('favorites', JSON.stringify(this.favorites));
  }

}
