import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
 
  constructor(private service:CartsService) { }
  cartProducts:any[]=[]
  total:any;
  succes:boolean=false
  ngOnInit(): void {
    this.GetCartsProducts()
  }
  addamount(index:number){
this.cartProducts[index].quantity++
localStorage.setItem("cart",JSON.stringify(this.cartProducts))
this.getCartTotal()
  }
  minusamount(index:number){
    this.cartProducts[index].quantity--
localStorage.setItem("cart",JSON.stringify(this.cartProducts))
this.getCartTotal()
}
detectchange(){
localStorage.setItem("cart",JSON.stringify(this.cartProducts))
this.getCartTotal()


}
deleteproduct(index:number){
  this.cartProducts.splice(index,1)
localStorage.setItem("cart",JSON.stringify(this.cartProducts))
this.getCartTotal()


}
cleardata(){
  this.cartProducts=[];
localStorage.setItem("cart",JSON.stringify(this.cartProducts))
this.getCartTotal()


}
  GetCartsProducts(){
    if("cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
      }
      this.getCartTotal()

}
getCartTotal(){
  this.total=0
  for(let x in this.cartProducts)
{this.total+=this.cartProducts[x].item.price *this.cartProducts[x].quantity

}
}
addCart(){
  let product=this.cartProducts.map(item =>{
   return {productid: item.item.id,quantity:item.quantity}
  })
  let model={
    userid:5,
    date:new Date(),
    products:product
  }
  //console.log(model)
  this.service.createnewCart(model).subscribe(res =>{
this.succes=true
  })
}
}
