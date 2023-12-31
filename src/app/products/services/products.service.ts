import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  GetAllProducts(){
 return this.http.get(environment.baseApi + "products")
  }
 GetAllCategory(){
 return this.http.get(environment.baseApi + "products/categories")

 }
 getProductbyCategory(keyword:string){
 return this.http.get(environment.baseApi + "products/category/" +keyword)

 }
 GetProductById(id:any){
  return this.http.get(environment.baseApi + "products/"+id)
 }

}
