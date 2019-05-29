import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionRenewalsComponent } from './subscription-renewals.component';

describe('SubscriptionRenewalsComponent', () => {
  let component: SubscriptionRenewalsComponent;
  let fixture: ComponentFixture<SubscriptionRenewalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionRenewalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionRenewalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
