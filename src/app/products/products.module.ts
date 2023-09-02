import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { Product1Component } from './component/product1/product1.component';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';



@NgModule({
  declarations: [
    //AllProductsComponent,
    
    ProductDetailsComponent,
    
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    




  ]
})
export class ProductsModule { }
