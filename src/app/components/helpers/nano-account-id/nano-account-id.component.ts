import {Component, Input, OnChanges, HostBinding} from '@angular/core';

@Component({
  selector: 'app-banano-account-id',
  templateUrl: './banano-account-id.component.html',
  styleUrls: ['./banano-account-id.component.css'],
})
export class BananoAccountIdComponent implements OnChanges {

  @HostBinding('class') classes: string;
  @Input() accountID: string;
  @Input() middle: 'on'|'off'|'auto'|'break' = 'auto';

  firstCharacters = '';
  middleCharacters = '';
  lastCharacters = '';

  constructor() { }

  ngOnChanges() {
    if (this.middle === 'auto') this.classes = 'uk-flex';
    if (this.middle === 'break') this.classes = 'banano-address-breakable';
    const accountID = this.accountID;
    const openingChars = 10;
    const closingChars = 5;
    this.firstCharacters = accountID?.split('').slice(0, openingChars).join('').replace('ban_', '');
    this.lastCharacters = accountID?.split('').slice(-closingChars).join('');
    if (this.middle !== 'off') {
      this.middleCharacters = accountID?.split('').slice(openingChars, -closingChars).join('');
    }
  }

}
