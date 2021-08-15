import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-retailer-deletefunction',
  templateUrl: './retailer-deletefunction.component.html',
  styleUrls: ['./retailer-deletefunction.component.css']
})
export class RetailerDeletefunctionComponent implements OnInit {

  prod:any;
  prodid:number=0;
  supplierid:number=3;

  constructor(private pService:ProductserviceService) { }

  ngOnInit(): void {

    this.pService.getAllProducts(this.supplierid).subscribe((data)=>
    {
        console.log(data);
        this.prod=data;
    })
    
  }
  
  DeleteProd(id:number)
  {

    if (confirm("Are you sure you want to delete this item?") == true) {
      this.pService.deleteProduct(this.prodid=id).subscribe(
        (data)=>
        {
          console.log(data);
          this.prod=data;
        }
      )
  
      window.location.reload();
  } else {
    alert("Delete cancelled!!");
  }
    

  }

}
