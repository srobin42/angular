import { TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Item } from '../concession/item';

describe('Cart Service', () => {
  let cartService: CartService;

  const testCartItem: Item = {
    id: 1,
    name: 'Popcorn',
    price: 3,
    total: 3,
    quantity: 1
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartService
      ]
    });

    cartService = TestBed.inject<CartService>(CartService);
  });

  it('addItemToCart should add item into cart', (done) => {
    cartService.addToCart(testCartItem);

    cartService.getCurrentCartItems$().subscribe((cartItems) => {
      expect(cartItems).toEqual([testCartItem]);
      done();
    });
  });

  it('deleteFromCart should delete an item', fakeAsync(() => {
    cartService.addToCart(testCartItem);
    tick();
    cartService.deleteFromCart(testCartItem);

    cartService.getCurrentCartItems$().subscribe((cartItems) => {
      expect(cartItems).toEqual([]);
    }).unsubscribe();
  }));
});
