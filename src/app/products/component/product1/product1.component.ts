import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/carts/models/product';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
@Input() data!:Product
@Output() item=new EventEmitter()
addbutton:boolean=false;
amount:number=0
  constructor() { }

  ngOnInit(): void {
  }

  add(){
this.item.emit({item:this.data,quantity:this.amount})
  }
}
