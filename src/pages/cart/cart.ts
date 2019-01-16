import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Product } from '../home/product';
import { CartService } from '../services/cart.service';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage implements OnInit {

  cartProducts: Product[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private cartService: CartService) {
  }

   ngOnInit() {
    this.getCartProduct();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  onDeleteCart(product: Product) {
    this.cartService.removeLocalCart(product);

    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.cartService.getLocalCartProduct();
  }

}
