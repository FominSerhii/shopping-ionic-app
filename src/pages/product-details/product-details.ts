import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../services/auth';
import { Product } from '../home/product';
import { CartService } from '../services/cart.service';
import { FavouritesService } from '../services/favourites.service';

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
  providers: [AuthService]
})
export class ProductDetailsPage {

  product : any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthService,
              public cartService: CartService,
              public favouritesService: FavouritesService
             ) {
  }

  ionViewDidLoad() {
    this.product = this.navParams.data;
  }

  goBack() {
      this.navCtrl.pop();
  }

  addToCart(product: Product) {
    this.cartService.addToCartProduct(product);
  }

  addToFavourites(product: Product) {
    this.favouritesService.addToFavouriteProduct(product);
  }

}
