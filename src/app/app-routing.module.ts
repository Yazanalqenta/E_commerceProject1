
import { AllProductsComponent } from './products/component/all-products/all-products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/component/product-details/product-details.component';
import { CartsComponent } from './carts/components/cart/carts.component';



const routes: Routes = [
  {path:"products",component:AllProductsComponent},
  {path:"detials/:id", component:ProductDetailsComponent},
  {path:"cart",component:CartsComponent},
  {path:"**", redirectTo:"products",pathMatch:"full" }
];

  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })

  export class AppRoutingModule { }



