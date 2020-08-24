import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
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
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryConcessionService)
  ],
  providers: [
    ConcessionService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
