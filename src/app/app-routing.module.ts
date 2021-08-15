import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareproductComponent } from './compareproduct/compareproduct.component';
import { RetailerDeletefunctionComponent } from './retailer-deletefunction/retailer-deletefunction.component';
import { RetailerAddfunctionComponent } from './retailerAddfunction/retailerAddfunction.component';
import { RetailerupdateproductComponent } from './retailerupdateproduct/retailerupdateproduct.component';
import { RetailerupdatefunctionComponent } from './retailerupdatefunction/retailerupdatefunction.component';
import { RetailerprofileComponent } from './retailerprofile/retailerprofile.component';

const routes: Routes = [

  {path:'compareproducts',component:CompareproductComponent},
  {path:'retailerAddfunction',component:RetailerAddfunctionComponent},
  {path:'retailerdeletefunction',component:RetailerDeletefunctionComponent},
  {path:'retailerupdateproduct',component:RetailerupdateproductComponent},
  {path:'retailerupdatefunction',component:RetailerupdatefunctionComponent},
  {path:'retailerprofile',component:RetailerprofileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
