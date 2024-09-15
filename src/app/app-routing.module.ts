import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '/cart', component: CartComponent }, // Define the route to the cart page
   { path: '/i', component: AppComponent } // Define the default route (optional)
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
