import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { map } from 'rxjs/operators';

import { Product } from './product'
import { ProductsService } from '../services/products.service';
import { ProductDetailsPage } from '../product-details/product-details';
import { FavouritesService   } from '../services/favourites.service';
import { CartService } from '../services/cart.service';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  descending: boolean = false;
  order: number;
  column: any = 'price';
  term;

  products: any;
  product: Product = new Product();

  constructor(public navCtrl: NavController,
              private productsService: ProductsService,
              private favouritesService: FavouritesService,
              private cartService: CartService) {}

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

  addToCart(product: Product) {
    this.cartService.addToCartProduct(product);
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}


