import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavouritesPage } from '../pages/favourites/favourites';
import { CartPage } from '../pages/cart/cart';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { AdminPage } from '../pages/admin/admin';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../pages/services/auth';
import { ProductsService } from '../pages/services/products.service';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { FavouritesService } from '../pages/services/favourites.service';

import { config } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavouritesPage,
    CartPage,
    SigninPage,
    SignupPage,
    AdminPage,
    TabsPage,
    ProductDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavouritesPage,
    CartPage,
    SigninPage,
    SignupPage,
    AdminPage,
    TabsPage,
    ProductDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ProductsService,
    FavouritesService
  ]
})
export class AppModule {}
