import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompareproductComponent } from './compareproduct/compareproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { RetailerAddfunctionComponent } from './retailerAddfunction/retailerAddfunction.component';
import { FormsModule } from '@angular/forms';
import { RetailerDeletefunctionComponent } from './retailer-deletefunction/retailer-deletefunction.component';
import { RetailerupdateproductComponent } from './retailerupdateproduct/retailerupdateproduct.component';
import { RetailerupdatefunctionComponent } from './retailerupdatefunction/retailerupdatefunction.component';
import { RetailerprofileComponent } from './retailerprofile/retailerprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareproductComponent,
    RetailerAddfunctionComponent,
    RetailerDeletefunctionComponent,
    RetailerupdateproductComponent,
    RetailerupdatefunctionComponent,
    RetailerprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //new
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
