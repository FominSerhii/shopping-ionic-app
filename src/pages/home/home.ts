import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { map } from 'rxjs/operators';

import { Product } from './product'
import { ProductsService } from '../services/products.service';
import { ProductDetailsPage } from '../product-details/product-details';
import { FavouritesService   } from '../services/favourites.service';
import { FavouritesPage } from '../../pages/favourites/favourites';
import { CartPage } from '../../pages/cart/cart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  favouritesPage = FavouritesPage;
  cartPage = CartPage;
  homePage = HomePage

  products: any;
  product: Product = new Product();

  constructor(public navCtrl: NavController,
              private productsService: ProductsService,
              private favouritesService: FavouritesService) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productsService.getProductList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(products => {
      this.products = products;
    });
  }

  showDetails(product: Product): void  {
    this.navCtrl.push(ProductDetailsPage, product);
  }

  addToFavourites(product: Product) {
    this.favouritesService.addToFavouriteProduct(product);
  }

}


