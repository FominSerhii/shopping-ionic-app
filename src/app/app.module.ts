import { AngularFireModule } from '@angular/fire';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { ErrorHandler, NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../pages/services/auth';
import { FavouritesPage } from '../pages/favourites/favourites';
import { ProductsService } from '../pages/services/products.service';
import { FavouritesService } from '../pages/services/favourites.service';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { CartService } from '../pages/services/cart.service';
import { SortPipe } from '../pages/home/sort.pipe';

import { config } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavouritesPage,
    CartPage,
    SigninPage,
    SignupPage,
    TabsPage,
    ProductDetailsPage,
    SortPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot(),
    Ng2SearchPipeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavouritesPage,
    CartPage,
    SigninPage,
    SignupPage,
    TabsPage,
    ProductDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ProductsService,
    FavouritesService,
    CartService
  ]
})
export class AppModule {}
