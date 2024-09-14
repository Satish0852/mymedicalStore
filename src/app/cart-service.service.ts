import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  private cart:{ product:Product,quantity:number}[]=[];

  addProduct(product :Product){
   const cartItem=this.cart.find(i=>i.product.name==product.name)
   if(cartItem){
    cartItem.quantity++
    }
    else{
      this.cart.push({product,quantity:1});
     }
  }
  removeProduct(product:Product){
   const index= this.cart.findIndex(item=>item.product.name==product.name)
    if(index !==-1){
      this.cart[index].quantity--;
      if(this.cart[index].quantity==0){
      this.cart.splice(index,1)
      }

    }

  }
  getCart(){
    return this.cart;
  }
}
