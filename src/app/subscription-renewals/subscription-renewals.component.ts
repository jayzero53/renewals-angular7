import { Component, OnInit } from '@angular/core';

import {VivaPackage} from '../classes/VivaPackage';
import {VivaPackagesService} from '../viva-packages.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subscription-renewals',
  templateUrl: './subscription-renewals.component.html',
  styleUrls: ['./subscription-renewals.component.css']
})
export class SubscriptionRenewalsComponent implements OnInit {

  allPackages: VivaPackage[] = [];
  shownPackages: VivaPackage[] = [];
  constructor(private packageService: VivaPackagesService, private router: Router) { }

  ngOnInit() {
    this.packageService.getPackages().subscribe(
      response => {
        console.log('response: ', response);
        this.allPackages = response;
        this.shownPackages = this.allPackages.filter(vivaPackage => vivaPackage.AccountStatus === 1);
      },
      error => {
        console.log('error:', error);
      }
    );
  }


  handleClick() {
    console.log('clicked');
    this.router.navigate([`/SubscriptionContract`]);
  }
}
