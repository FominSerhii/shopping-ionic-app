import { AngularFireList } from 'angularfire2/database'

import { Product } from '../home/product';

export class FavouritesService {

  favouriteProducts: AngularFireList<Product>;
  favouritesCount = 0;

  constructor() {
     this.calculatefavouritesCount()
   }

  addToFavouriteProduct(product: Product): void {
    let a: Product[];
    a = JSON.parse(localStorage.getItem('fav_item')) || [];
    a.push(product);
    localStorage.setItem('fav_item', JSON.stringify(a));
    this.calculatefavouritesCount();
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
    this.calculatefavouritesCount();
  }

  calculatefavouritesCount() {
    this.favouritesCount = this.getLocalFavouriteProduct().length;
  }

}
