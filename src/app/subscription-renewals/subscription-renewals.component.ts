import { Component, OnInit } from '@angular/core';

import {VivaPackage} from '../classes/VivaPackage';
import {VivaPackagesService} from '../viva-packages.service';
import {Router} from '@angular/router';
import {VivaPackageCardComponent} from '../viva-package-card/viva-package-card.component';

@Component({
  selector: 'app-subscription-renewals',
  templateUrl: './subscription-renewals.component.html',
  styleUrls: ['./subscription-renewals.component.css'],
  // directives: [VivaPackageCardComponent]
})
export class SubscriptionRenewalsComponent implements OnInit {

  allPackages: VivaPackage[] = [];
  shownPackages: VivaPackage[] = [];
  vivaCards: VivaPackageCardComponent[] = [];

  constructor(private packageService: VivaPackagesService, private router: Router) { }

  ngOnInit() {
    this.packageService.getPackages().subscribe(
      response => {
        console.log('response: ', response);
        this.allPackages = response;
        this.shownPackages = this.allPackages.filter(vivaPackage => vivaPackage.AccountStatus === 1);
        this.populateVivaCards();
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

  private populateVivaCards() {
    for (const vivaPackage of this.shownPackages) {
      const vivaPackageCardComponent = new VivaPackageCardComponent();
      vivaPackageCardComponent.SubscriptionPackageID = vivaPackage.SubscriptionPackageID;
      vivaPackageCardComponent.AccountStatus = vivaPackage.AccountStatus;
      vivaPackageCardComponent.EnableCallTracking = vivaPackage.EnableCallTracking;
      vivaPackageCardComponent.NumBumpUps = vivaPackage.NumBumpUps;
      vivaPackageCardComponent.NumGallery = vivaPackage.NumGallery;
      vivaPackageCardComponent.NumPhotos = vivaPackage.NumPhotos;
      vivaPackageCardComponent.NumTopAds = vivaPackage.NumTopAds;
      vivaPackageCardComponent.NumUrgent = vivaPackage.NumUrgent;
      vivaPackageCardComponent.PackageName = vivaPackage.PackageName;
      vivaPackageCardComponent.Price = vivaPackage.Price;
      this.vivaCards.push(vivaPackageCardComponent);
      }
  }
}
