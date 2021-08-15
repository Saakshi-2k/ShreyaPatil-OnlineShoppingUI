import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-retailerupdateproduct',
  templateUrl: './retailerupdateproduct.component.html',
  styleUrls: ['./retailerupdateproduct.component.css']
})
export class RetailerupdateproductComponent implements OnInit {
  
  constructor(private pService:ProductserviceService,private router:Router) {
    // this.prod=new Product();

   }

  // prod:Product;
  prod:any;
  prodid:number=108;
  supplierid:number=0;

  ngOnInit(): void {

    this.pService.getAllProducts(this.supplierid).subscribe((data)=>
    {
        console.log(data);
        // this.prod=data as Product;
        this.prod=data;
      })
  }

  

  // UpdateProd(id:number)
  // {
  //   this.pService.updateProduct(this.prodid=id).subscribe(
  //     (data)=>
  //     {
  //       console.log(data);
  //       this.prod=data;
  //     }
  //   )
  // }

  editInfo(prodid:any)
  {
    localStorage.setItem("prodid",prodid);
    this.router.navigate(['retailerupdatefunction']);

  }

  // saveData(id:number)
  // {

  // this.pService.addNewProduct(this.prod2).subscribe(
  //   (data)=>{
  //     console.log(data); 
  //   }
  // );

  // }
}
