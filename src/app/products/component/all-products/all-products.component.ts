import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/carts/models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:Product[]=[];
  categories:string[]=[];
  cartProducts:any[]=[];
  loading:boolean=false;
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }
  getProducts(){
  this.loading=true;
  this.service.GetAllProducts().subscribe((result:any)=>{
  this.products=result;
  this.loading=false;

 }
 )
  }

  getCategories(){
    this.loading=true;

    this.service.GetAllCategory().subscribe((result:any)=>{

     this.categories=result;
     this.loading=false;

    console.log(this.categories)
    } //,
    //error=>{
     //console.log(error.massage);
    //}
    )
     }
     filterCategory(event:any){
     let value= event.target.value;
     if(value==="All"){
      this.getProducts();
     }else{
      this.getProductsCategory(value);
     }

     //console.log(value);
     }
     getProductsCategory(keyword:string){
     this.loading=true;

      this.service.getProductbyCategory(keyword).subscribe((result:any)=>{
this.products=result;
this.loading=false;

      })
     }

     addToCart(event:any){
      if("cart" in localStorage){
        this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
        let exist=this.cartProducts.find(item=> item.item.id===event.item.id)
        if(exist)
        {
          alert("Product Is Already Your Cart")
        }else{
          this.cartProducts.push(event)
          localStorage.setItem("cart",JSON.stringify(this.cartProducts))
        }


      }else{
        this.cartProducts.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
      }


     }
}
