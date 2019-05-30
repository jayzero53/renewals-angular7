import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-viva-package-card',
  templateUrl: './viva-package-card.component.html',
  styleUrls: ['./viva-package-card.component.css'],
})
export class VivaPackageCardComponent implements OnInit {

  @Input() SubscriptionPackageID: number;
  @Input() AccountStatus: number;
  @Input() EnableCallTracking: boolean;
  @Input() NumBumpUps: number;
  @Input() NumGallery: number;
  @Input() NumPhotos: number;
  @Input() NumTopAds: number;
  @Input() NumUrgent: number;
  @Input() PackageName: string;
  @Input() Price: number;

  constructor() { }

  ngOnInit() {
  }

}
