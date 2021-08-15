import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-retailerprofile',
  templateUrl: './retailerprofile.component.html',
  styleUrls: ['./retailerprofile.component.css']
})
export class RetailerprofileComponent implements OnInit {

  constructor(private pService:ProductserviceService,private router:Router) { }

  details:any;
  supplierid:number=1;

  prod:any;
  prodid:number=108;

  ngOnInit(): void {

    
    this.pService.getSupplierDetails(this.supplierid).subscribe((data)=>
    {
        console.log(data);
        this.details=data;
      })

      this.pService.getAllProducts(this.supplierid).subscribe((data)=>
      {
          console.log(data);
          // this.prod=data as Product;
          this.prod=data;
        })
  }

  Add()
  {
    this.router.navigate(['retailerAddfunction']);

  }

  Delete()
  {
    this.router.navigate(['retailerdeletefunction']);

  }

  Edit()
  {
    this.router.navigate(['retailerupdateproduct']);

  }

}
