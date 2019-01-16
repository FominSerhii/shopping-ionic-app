import { Storage } from '@ionic/storage';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'

import { Product } from '../home/product';

export class CartService {

  cartProducts: AngularFireList<Product>;
  private cart: Product[] = [];
  cartCount = 0;

  constructor() {
    this.calculateCartCount();
  }

  addToCartProduct(product: Product): void {
    let a: Product[];
    a = JSON.parse(localStorage.getItem('cart_item')) || [];
    a.push(product);
    localStorage.setItem('cart_item', JSON.stringify(a));
    this.calculateCartCount();
  }

  getLocalCartProduct() : Product[] {
    const products:Product[] = JSON.parse(localStorage.getItem('cart_item')) || [];

    return products;
  }

  removeCart(key: string) {
    this.cartProducts.remove(key);
  }

  removeLocalCart(product: Product) {
    const products: Product[] = JSON.parse(localStorage.getItem('cart_item'));

    for(let i = 0; i < products.length; i++) {
      if (products[i].key === product.key) {
        products.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('cart_item', JSON.stringify(products));
    this.calculateCartCount();
  }

  calculateCartCount() {
    this.cartCount = this.getLocalCartProduct().length;
  }


}
