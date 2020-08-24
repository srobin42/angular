import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Concession } from './concession';
import { ConcessionService } from './concession.service';
import { CartService } from '../cart/cart.service';
import { Item } from './item';

@Component({
  selector: 'app-concession',
  templateUrl: 'concession.component.html',
  styleUrls: ['concession.component.scss']
})

export class ConcessionComponent implements OnInit {
  public concessions$: Observable<Concession[]>;

  constructor(
    private concessionService: ConcessionService,
    private cartService: CartService
  ) { }

  public ngOnInit(): void {
    this.concessions$ = this.concessionService.getConcessions();

    this.concessions$.subscribe();
  }

  public addItemToCart(concession: Concession): void {
    const item = {
      name: concession.name,
      price: concession.price,
      id: concession.id
    } as Item;
    this.cartService.addToCart(item);
  }
}
