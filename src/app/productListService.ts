import { Injectable } from "@angular/core";
import { Product } from "./Product";
@Injectable({
    providedIn: 'root'
  })
export class productlistService{
constructor(){}
    products:Product[]=[
        new Product('babySoap',4,1),
        new Product('volin',4,2),
        new Product('coldSyrup',4,3),
        new Product('beautycare',4,4),
    ]

    getProductCategory(category:number):Product[]{
  return this.products.filter(p=>p.category===category);
    }
}