import { Injectable } from "@angular/core";
import { Product } from "./Product";
@Injectable({
    providedIn: 'root'
  })
export class productlistService{
constructor(){}
products: Product[] = [
  // Baby Care
  new Product('babySoap', 4, 1),
  new Product('Diaper Rash Cream', 5, 1),
  new Product('Baby Shampoo', 6, 1),
  new Product('Baby Lotion', 7, 1),
  new Product('Teething Gel', 8, 1),

  // Ladies Beauty & Care
  new Product('beautycare', 4, 2),
  new Product('Face Serum', 12, 2),
  new Product('Lip Balm', 3, 2),
  new Product('Makeup Remover', 10, 2),
  new Product('Hair Oil', 9, 2),

  // Cold & Cough
  new Product('coldSyrup', 4, 3),
  new Product('Cough Syrup', 5, 3),
  new Product('Nasal Spray', 6, 3),
  new Product('Throat Lozenges', 3, 3),
  new Product('Herbal Tea for Cough', 8,3),

  // Pain Relief
  new Product('volin', 4, 4),
  new Product('Muscle Pain Gel', 7, 4),
  new Product('Pain Relief Patch', 5, 4),
  new Product('Headache Relief Balm', 4, 4),
  new Product('Joint Pain Cream', 9, 4)
];


    getProductCategory(category:number):Product[]{
  return this.products.filter(p=>p.category===category);
    }
}