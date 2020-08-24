import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Concession } from './concession';

@Injectable()
export class ConcessionService {
  private url = 'api/concessions';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  public getConcessions(): Observable<Concession[]> {
    return this.http.get<Concession[]>(this.url);
  }

  public addConcession(concessionName: string, concessionPrice: number): Observable<Concession[]> {
    const newConcession: string = JSON.stringify({ name: concessionName, price: Number(concessionPrice), image: ''});
    return this.http.post<Concession[]>(this.url, newConcession, { headers: this.headers });
  }

}
