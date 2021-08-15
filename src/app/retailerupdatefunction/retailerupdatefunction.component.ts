import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-retailerupdatefunction',
  templateUrl: './retailerupdatefunction.component.html',
  styleUrls: ['./retailerupdatefunction.component.css']
})
export class RetailerupdatefunctionComponent implements OnInit {

  constructor(private pservice:ProductserviceService) 
  {
      this.prod2=new Product();
   }


  prodid:any;
  prod2:Product;
  prod:any;
  // supplierId:number=0;
  ngOnInit(): void {
    this.prodid=localStorage.getItem("prodid");
      this.pservice.updateProduct(this.prodid).subscribe(
        (data)=>{
        //  this.prod2=data as Product;
          this.prod=data;
          console.log(data);
        }
      )
  }

  saveData()
   {
     this.pservice.editproduct(this.prod).subscribe
     (
       (data)=>{ console.log(data)}
     )
     alert("Item updated Successfully!!");

   }

}

//this.pService.updateProduct(this.prodid=id).subscribe(
  //     (data)=>
  //     {
  //       console.log(data);
  //       this.prod=data;
  //     }