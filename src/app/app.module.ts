import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionRenewalsComponent } from './subscription-renewals/subscription-renewals.component';
import { SubscriptionContractComponent } from './subscription-contract/subscription-contract.component';
import { PaymentInformationComponent } from './payment-information/payment-information.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionRenewalsComponent,
    SubscriptionContractComponent,
    PaymentInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
