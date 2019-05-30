import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VivaPackageCardComponent } from './viva-package-card.component';

describe('VivaPackageCardComponent', () => {
  let component: VivaPackageCardComponent;
  let fixture: ComponentFixture<VivaPackageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VivaPackageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VivaPackageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
