import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-compareproduct',
  templateUrl: './compareproduct.component.html',
  styleUrls: ['./compareproduct.component.css']
})
export class CompareproductComponent implements OnInit {
  
  prodid1:number=101;
  prodid2:number=103;
  prodid3:number=0;
  prodid4:number=0;
  prod:any;

  arrayOfKeys:any = ["ProdId","","","","","","",""];

  constructor(private pService:ProductserviceService) { }

  ngOnInit(): void {

    this.pService.getProductById(this.prodid1,this.prodid2,this.prodid3,this.prodid4).subscribe(
      (data)=>
      {
        console.log(data);
        this.prod=data;
      }
    )
  

}
}
