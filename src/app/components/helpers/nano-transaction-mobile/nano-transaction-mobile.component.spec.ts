import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BananoTransactionMobileComponent } from './banano-transaction-mobile.component';

describe('BananoTransactionMobileComponent', () => {
  let component: BananoTransactionMobileComponent;
  let fixture: ComponentFixture<BananoTransactionMobileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BananoTransactionMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BananoTransactionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
