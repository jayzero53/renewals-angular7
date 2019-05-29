import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subscription-contract',
  templateUrl: './subscription-contract.component.html',
  styleUrls: ['./subscription-contract.component.css']
})
export class SubscriptionContractComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleProgressClick() {
    this.router.navigate([`/PaymentInformation`]);
  }

  handleReturnClick() {
    this.router.navigate([`/SubscriptionRenewals`]);
  }
}
