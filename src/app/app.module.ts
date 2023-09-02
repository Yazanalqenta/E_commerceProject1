import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { AllProductsComponent } from './products/component/all-products/all-products.component';
import { Product1Component } from './products/component/product1/product1.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { CartsModule } from './carts/carts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    Product1Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    CartsModule,
    BrowserAnimationsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
