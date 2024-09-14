import { Component } from '@angular/core';
import { Product } from '../Product';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cart:{product:Product,quantity:number}[]=[];

constructor(private CartService:CartServiceService,){
this.cart=this.CartService.getCart();
}
increaseQuantity(p:Product){
this.CartService.addProduct(p)
}
decreaseQuantity(p:Product){
  this,this.CartService.removeProduct(p);
}
sendToWatsApp(){
  //const phoneNumber = '+917013095450';
  let message = 'Thank you for shopping with us! Here are the details of your cart:\n\n';

  this.cart.forEach(item => {
    message += `${item.product.name} - ₹${item.quantity} \n`;
  });
  
  message += `\nWe appreciate your visit to our medical store!`;

  const encodedMessage = encodeURIComponent(message);
  const watsappUrl=`https://api.whatsapp.com/send?phone=${7013095450}&text=${encodedMessage}`;
  window.open(watsappUrl,'_blank')

}
}
