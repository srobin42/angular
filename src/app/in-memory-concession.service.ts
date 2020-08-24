import { InMemoryDbService } from 'angular-in-memory-web-api';
import { of } from 'rxjs';

import { Concession } from './concession/concession';

export class InMemoryConcessionService implements InMemoryDbService {
  createDb() {
    const concessions: Concession[] = [
      {id: 1, name: 'Popcorn', price: 3, image: 'popcorn.jpg'},
      {id: 2, name: 'Snickers', price: 4, image: 'snickers.jpg'},
      {id: 3, name: 'Soda', price: 2, image: 'soda.jpg'}
    ];

    return of({ concessions });
  }
}
