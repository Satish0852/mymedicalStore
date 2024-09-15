import { Component } from '@angular/core';
import { CartServiceService } from './cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-Pharma';
 ImageURL:String="/assets/logo.png";

//  cart:any = [];

//  constructor(private router: Router, private cartService: CartServiceService) {
//    this.cart = this.cartService.getCart(); // Get the cart items
//  }

//  goToCart() {
//    this.router.navigate(['/cart']); // Navigate to the cart page
//  }
}
