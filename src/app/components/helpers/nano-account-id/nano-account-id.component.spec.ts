import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BananoAccountIdComponent } from './banano-account-id.component';

describe('BananoAccountIdComponent', () => {
  let component: BananoAccountIdComponent;
  let fixture: ComponentFixture<BananoAccountIdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BananoAccountIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BananoAccountIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
