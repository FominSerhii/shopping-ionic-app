import { Component } from '@angular/core';

import { FavouritesPage } from '../../pages/favourites/favourites';
import { CartPage } from '../../pages/cart/cart';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: `page-tabs`,
  template: `
   <ion-tabs>
    <ion-tab [root]="homePage" tabTitle="Home" tabIcon="home"></ion-tab>
    <ion-tab [root]="favouritesPage" tabTitle="Favourites" tabIcon="heart">></ion-tab>
    <ion-tab [root]="cartPage" tabTitle="Cart" tabIcon="cart">></ion-tab>
  </ion-tabs>`
})


export class TabsPage {
  favouritesPage = FavouritesPage;
  cartPage = CartPage;
  homePage = HomePage;
}
