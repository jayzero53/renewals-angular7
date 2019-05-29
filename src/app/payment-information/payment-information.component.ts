import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.css']
})
export class PaymentInformationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleReturnClick() {
      this.router.navigate([`/SubscriptionContract`]);
  }
}
