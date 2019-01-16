import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';

import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../pages/services/auth';

const config = {
  apiKey: "AIzaSyB8KNH6FWANayHfhjf80nGVFfOd0simInE",
  authDomain: "sopping-web-app.firebaseapp.com",
  databaseURL: "https://sopping-web-app.firebaseio.com",
  projectId: "sopping-web-app",
  storageBucket: "sopping-web-app.appspot.com",
  messagingSenderId: "814755271762"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = TabsPage;

  email: string;
  password: string;

  signinPage = SigninPage;
  signupPage = SignupPage;
  homePage = HomePage;

  @ViewChild ('nav') nav: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              public authService: AuthService) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLogout() {
    this.authService.logout();
    console.log('logout')
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

}

