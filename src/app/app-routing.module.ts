import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// const routes: Routes = [
//   { path: '', component: HomeComponent },  // Route for HomeComponent
//   { path: 'category/:id', component: CategoryComponent },  // Route for CategoryComponent with dynamic ID
//   { path: 'cart', component: CartComponent },  // Route for CartComponent
//   { path: '**', redirectTo: '' } 
// ];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
