import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsingleComponent } from './productsingle/productsingle.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-single', component: ProductsingleComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
