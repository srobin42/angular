import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { ConcessionComponent } from './concession/concession.component';
import { ConcessionService } from './concession/concession.service';
import { InMemoryConcessionService } from './in-memory-concession.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConcessionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryConcessionService),
    HttpClientTestingModule
  ],
  providers: [
    ConcessionService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
