import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

import { AuthService } from '../services/auth';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
    this.navCtrl.setRoot(TabsPage);
  }

}
