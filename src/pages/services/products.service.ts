import { Injectable } from '@angular/core';

import { Product } from '../home/product';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Injectable()

export class ProductsService {

  private dbPath = '/products';

  productsRef: AngularFireList<any>;
  product: AngularFireObject<Product>
  selectedProduct: Product = new Product();

  constructor(private db: AngularFireDatabase) {
    this.productsRef = db.list(this.dbPath);
  }

  createProduct(product: Product) {
    this.productsRef.push(product);
  }

  getProductById(key: string) {
    this.product = this.db.object('products/' + key);
    return this.product;
  }

  updateProduct(product: Product) {
    this.productsRef.update(product.key, product);
  }

  deleteProduct(product: Product) {
    return this.productsRef.remove(product.key);
  }

  getProductList(): AngularFireList<Product> {
    return this.productsRef;
  }

  // private handleError(error) {
  //   console.log(error);
  // }

}



