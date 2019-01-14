import { Storage } from '@ionic/storage';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'

import { Product } from '../home/product';

export class FavouritesService {

  favouriteProducts: AngularFireList<Product>;
  private favourite: Product[] = [];


  constructor() { }

  addToFavouriteProduct(product: Product): void {
    let a: Product[];
    a = JSON.parse(localStorage.getItem('fav_item')) || [];
    a.push(product);
    setTimeout(() => {
      localStorage.setItem('fav_item', JSON.stringify(a));
    }, 100);
  }

  getLocalFavouriteProduct() : Product[] {
    const products:Product[] = JSON.parse(localStorage.getItem('fav_item')) || [];

    return products;
  }

  removeFavourite(key: string) {
    this.favouriteProducts.remove(key);
  }

  removeLocalFavourite(product: Product) {
    const products: Product[] = JSON.parse(localStorage.getItem('fav_item'));

    for(let i = 0; i < products.length; i++) {
      if (products[i].key === product.key) {
        products.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('fav_item', JSON.stringify(products));
  }

}
