import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BananoIdenticonComponent } from './banano-identicon.component';

describe('BananoIdenticonComponent', () => {
  let component: BananoIdenticonComponent;
  let fixture: ComponentFixture<BananoIdenticonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BananoIdenticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BananoIdenticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
