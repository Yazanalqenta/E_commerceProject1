import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/component/header.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    FormsModule

  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
   SelectComponent,
   FormsModule
  ]

})
export class SharedModule { }
