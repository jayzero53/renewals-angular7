import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionContractComponent } from './subscription-contract.component';

describe('SubscriptionContractComponent', () => {
  let component: SubscriptionContractComponent;
  let fixture: ComponentFixture<SubscriptionContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
