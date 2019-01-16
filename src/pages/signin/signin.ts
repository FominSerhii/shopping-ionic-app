import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../services/auth';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
    this.navCtrl.setRoot(TabsPage);
    console.log('signin');
  }

   goBack() {
    this.navCtrl.pop();
  }

}
