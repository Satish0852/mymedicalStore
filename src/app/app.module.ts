import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { AppComponent } from './app.component';
import { CartServiceService } from './cart-service.service';
import { productlistService } from './productListService';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CartServiceService,productlistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
