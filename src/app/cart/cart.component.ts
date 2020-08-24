import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CartService } from './cart.service';
import { Item } from '../concession/item';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.scss']
})

export class CartComponent implements OnInit {
  public cartItems$: Observable<Item[]> = of([]);
  public cartItems: Item[] = [];

  constructor(
    private cartService: CartService
  ) { }

  public ngOnInit(): void {
    this.cartItems$ = this.cartService.getCurrentCartItems$().pipe(
      tap((items) => this.cartItems = items)
    );

    this.cartItems$.subscribe();
  }

  public deleteItem(item: Item): void {
    this.cartService.deleteFromCart(item);
  }

  public totalCart(): Observable<number> {
    return this.cartService.getTotalAmount();
  }
}
