import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-retailerAddfunction',
  templateUrl: './retailerAddfunction.component.html',
  styleUrls: ['./retailerAddfunction.component.css']
})
export class RetailerAddfunctionComponent implements OnInit {

  prod:Product;
  supplierId:number=0

  constructor(private prodservice:ProductserviceService) {
    this.prod=new Product();

   }

  ngOnInit(): void {
  }

  saveData()
  {

  this.prodservice.addNewProduct(this.prod).subscribe(
    (data)=>{
      console.log(data); 
    }
  );

  alert("Item Added Successfully!!")

  }

}
