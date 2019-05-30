import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SubscriptionContractComponent} from './subscription-contract/subscription-contract.component';
import {SubscriptionRenewalsComponent} from './subscription-renewals/subscription-renewals.component';
import {PaymentInformationComponent} from './payment-information/payment-information.component';

const routes: Routes = [
  {path: '', redirectTo: '/SubscriptionRenewals', pathMatch: 'full'},
  {path: 'SubscriptionRenewals', component: SubscriptionRenewalsComponent},
  {path: 'SubscriptionContract', component: SubscriptionContractComponent},
  {path: 'PaymentInformation', component: PaymentInformationComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
