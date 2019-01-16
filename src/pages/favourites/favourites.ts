import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Product } from '../home/product';
import { FavouritesService } from '../services/favourites.service';
import { CartService } from '../services/cart.service';

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage implements OnInit {

  favouriteProducts: Product[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private favouritesService: FavouritesService,
              public cartService: CartService) {
  }

  ngOnInit() {
    this.getFavouriteProduct();
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

  addToCart(product: Product) {
    this.cartService.addToCartProduct(product);
  }

}
