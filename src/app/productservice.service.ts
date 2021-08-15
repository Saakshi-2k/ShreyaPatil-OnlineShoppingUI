import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:8184/onlineShopping/api"

  //Display All
  getProductById(prodid1:number,prodid2:number,prodid3:number,prodid4:number){
    return this.httpClient.get(this.baseUrl+"/products/"+prodid1+"/"+prodid2+"/"+prodid3+"/"+prodid4);
  }

  //Add product by Retailer

  addNewProduct(product:Product){
    return this.httpClient.post(this.baseUrl+"/products/addproduct",product);
  }

  //display all by retailer id

  getAllProducts(supplierid:number)
  {
    return this.httpClient.get(this.baseUrl+"/products/displayall/"+supplierid);
  }

  //delete product by Retailer
  deleteProduct(prodid:number){
    return this.httpClient.delete(this.baseUrl+"/products/deleteproduct/"+prodid);
  }

  updateProduct(prodid:number){
    return this.httpClient.get(this.baseUrl+"/products/updateproduct/"+prodid);
  }

  //get supplier details

  getSupplierDetails(supplierid:number){
    return this.httpClient.get(this.baseUrl+"/products/displaysupplier/"+supplierid);

  }
  editproduct(product:Product){
    return this.httpClient.put(this.baseUrl+"/products/editproduct",product);
  }

  
}
