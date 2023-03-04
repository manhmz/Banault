import { Component, OnInit, OnDestroy } from '@angular/core';
import {UtilService} from '../../services/util.service';
import {AppSettingsService} from '../../services/app-settings.service';
import * as bananocurrency from 'bananocurrency';
import {PriceService} from '../../services/price.service';
import { BigNumber } from 'bignumber.js';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.less']
})
export class ConverterComponent implements OnInit, OnDestroy {
  Mbanano = '1';
  raw = '';
  invalidMbanano = false;
  invalidRaw = false;
  invalidFiat = false;
  fiatPrice = '0';
  priceSub = null;

  constructor(
    private util: UtilService,
    public settings: AppSettingsService,
    private price: PriceService,
    public notifications: NotificationService,
  ) { }

  ngOnInit(): void {
    BigNumber.config({ DECIMAL_PLACES: 30 });
    this.Mbanano = '1';

    this.priceSub = this.price.lastPrice$.subscribe(event => {
      this.fiatPrice = (new BigNumber(this.Mbanano)).times(this.price.price.lastPrice).toString();
    });

    this.unitChange('mbanano');
  }

  ngOnDestroy() {
    if (this.priceSub) {
      this.priceSub.unsubscribe();
    }
  }

  unitChange(unit) {
    switch (unit) {
      case 'mbanano':
        if (this.util.account.isValidBananoAmount(this.Mbanano)) {
          this.raw = bananocurrency.convert(this.Mbanano, {from: bananocurrency.Unit.NANO, to: bananocurrency.Unit.raw});
          this.fiatPrice = (new BigNumber(this.Mbanano)).times(this.price.price.lastPrice).toString(10);
          this.invalidMbanano = false;
          this.invalidRaw = false;
          this.invalidFiat = false;
        } else {
          this.raw = '';
          this.fiatPrice = '';
          this.invalidMbanano = true;
        }
        break;
      case 'raw':
        if (this.util.account.isValidAmount(this.raw)) {
          this.Mbanano = bananocurrency.convert(this.raw, {from: bananocurrency.Unit.raw, to: bananocurrency.Unit.NANO});
          this.fiatPrice = (new BigNumber(this.Mbanano)).times(this.price.price.lastPrice).toString(10);
          this.invalidRaw = false;
          this.invalidMbanano = false;
          this.invalidFiat = false;
        } else {
          this.Mbanano = '';
          this.fiatPrice = '';
          this.invalidRaw = true;
        }
        break;
      case 'fiat':
        if (this.util.string.isNumeric(this.fiatPrice)) {
          this.Mbanano = (new BigNumber(this.fiatPrice)).dividedBy(this.price.price.lastPrice).toString(10);
          this.raw = bananocurrency.convert(this.Mbanano, {from: bananocurrency.Unit.NANO, to: bananocurrency.Unit.raw});
          this.invalidRaw = false;
          this.invalidMbanano = false;
          this.invalidFiat = false;
        } else {
          this.Mbanano = '';
          this.raw = '';
          this.invalidFiat = true;
        }
        break;
    }
  }

}
