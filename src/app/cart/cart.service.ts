import { Observable, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { Item } from '../concession/item';
import { map } from 'rxjs/operators';

@Injectable()
export class CartService {
  private cartItems$ = new ReplaySubject<Item[]>(1);
  private cartItems: Item[] = [];

  constructor() { }

  public getCurrentCartItems$(): Observable<Item[]> {
    return this.cartItems$;
  }

  public addToCart(item: Item): void {
    const cartItem = this.cartItems.find((existingItem) => existingItem.id === item.id);
    if (cartItem) {
      cartItem.quantity++;
      cartItem.total = cartItem.name === 'Snickers'
        ? this.adjustTotalForDiscount(cartItem.quantity, cartItem.price)
        : cartItem.total + item.price;

    } else {
      this.cartItems.push(
        {
          ...item,
          total: item.price,
          quantity: 1
        }
      );

      this.cartItems$.next([...this.cartItems]);
    }
  }

  public deleteFromCart(item: Item): void {
    const cartItem = this.cartItems.find((existingItem) => existingItem.id === item.id);
    if (cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        cartItem.total = cartItem.name === 'Snickers'
          ? this.adjustTotalForDiscount(cartItem.quantity, cartItem.price)
          : cartItem.total -= item.price;

        } else {
        this.cartItems = this.cartItems.filter((existingItem) => existingItem.id !== item.id);

        this.cartItems$.next(this.cartItems);
      }
    }
  }

  public getTotalAmount(): Observable<number> {
    return this.cartItems$.pipe(
      map((cartItems) => cartItems.reduce((total, cartItem) => {
        return total += cartItem.total;
      }, 0))
    );
  }

  private adjustTotalForDiscount(quantity: number, price: number): number {
    if (quantity % 5 === 0) {
      return ((quantity / 5) * 3) * price;
    }
    return quantity * price;
  }
}
