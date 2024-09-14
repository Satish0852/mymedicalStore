import { Component } from '@angular/core';
import { Product } from '../Product';
import { productlistService } from '../productListService';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent {
selectedCategory:number=1;
products: Product[]=[];

constructor(private productService:productlistService, private cartservice:CartServiceService){
this.fetchProducts()
}
  fetchProducts() {
    this.products=this.productService.getProductCategory(this.selectedCategory);
  }

  oCategoryChange(category:number){
    this.selectedCategory=category;
    this.fetchProducts();
  }
  addToCart(product:Product){
    this.cartservice.addProduct(product);

    }
}
