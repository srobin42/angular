import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Concession } from './concession';

@Injectable()
export class ConcessionService {
  private url = 'api/concessions';

  constructor(
    private http: HttpClient
  ) { }

  public getConcessions(): Observable<Concession[]> {
    return this.http.get<Concession[]>(this.url);
  }
}
