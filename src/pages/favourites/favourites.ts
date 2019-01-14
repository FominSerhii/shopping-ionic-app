import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Product } from '../home/product';
import { FavouritesService } from '../services/favourites.service';
/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  favouriteProducts: Product[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private favouritesService: FavouritesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  onDeleteFavourite(product: Product) {
    this.favouritesService.removeLocalFavourite(product);

    this.getFavouriteProduct();
  }

  getFavouriteProduct() {
    this.favouriteProducts = this.favouritesService.getLocalFavouriteProduct();
  }

}
