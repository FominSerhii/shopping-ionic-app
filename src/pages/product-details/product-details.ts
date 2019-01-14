import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AuthService} from '../services/auth';

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
              public authService: AuthService
             ) {
  }

  ionViewDidLoad() {
    this.product = this.navParams.data;
  }
  goBack() {
      this.navCtrl.pop();
  }

}
