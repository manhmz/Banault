import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-banano-transaction-mobile',
  templateUrl: './banano-transaction-mobile.component.html',
  styleUrls: ['./banano-transaction-mobile.component.less']
})
export class BananoTransactionMobileComponent implements OnInit, OnChanges {

  @Input() transaction: any;
  @Input() isInteractable = true;
  @Input() isHidden: boolean;
  @Input() settingIdenticonsStyle: string;

  isNaN = isNaN;
  isReceivableTransaction = false;
  isRepresentativeChange = false;
  isSendTransaction = false;
  isReceiveTransaction = false;

  constructor() { }

  ngOnInit(): void {
    this.updateType();
  }

  ngOnChanges() {
    this.updateType();
  }

  updateType() {
    if (this.transaction.isReceivable === true) {
      this.isReceivableTransaction = true;
      this.isRepresentativeChange = false;
      this.isSendTransaction = false;
      this.isReceiveTransaction = false;
      return;
    }

    if ( isNaN(this.transaction.amount) ) {
      this.isReceivableTransaction = false;
      this.isRepresentativeChange = true;
      this.isSendTransaction = false;
      this.isReceiveTransaction = false;
    } else if (
          (this.transaction.type === 'send')
        || (this.transaction.subtype === 'send')
      ) {
        this.isReceivableTransaction = false;
        this.isRepresentativeChange = false;
        this.isSendTransaction = true;
        this.isReceiveTransaction = false;
    } else if (
          (this.transaction.type === 'receive')
        || (this.transaction.subtype === 'receive')
        || (this.transaction.type === 'open')
      ) {
        this.isReceivableTransaction = false;
        this.isRepresentativeChange = false;
        this.isSendTransaction = false;
        this.isReceiveTransaction = true;
    }
  }

}
