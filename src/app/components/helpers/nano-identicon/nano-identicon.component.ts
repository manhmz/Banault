import { AfterViewInit, Component, ElementRef, Input, OnChanges, HostBinding, ViewChild } from '@angular/core';
import { createIcon } from '../../../../assets/lib/bananoidenticons.min.js';

@Component({
  selector: 'app-banano-identicon',
  templateUrl: './banano-identicon.component.html',
  styleUrls: ['./banano-identicon.component.css'],
})
export class BananoIdenticonComponent implements OnChanges, AfterViewInit {

  @Input() accountID: string;
  @Input() scale: number;
  @Input() settingIdenticonsStyle: string;

  renderedIdenticon = '';
  imageLoadErrorOccurred = false;

  constructor() { }

  @ViewChild('canvasContainer') canvasContainer: ElementRef;

  ngOnChanges() {
    this.renderBananoidenticon();
  }

  ngAfterViewInit() {
    this.renderBananoidenticon();
  }

  renderBananoidenticon() {
    if (
          (this.canvasContainer == null)
        || (this.settingIdenticonsStyle !== 'bananoidenticons')
        || (this.renderedIdenticon === this.accountID)
      ) {
        return;
    }

    this.renderedIdenticon = this.accountID;

    const scale =
      Math.max(
        Math.ceil(this.scale * window.devicePixelRatio),
        this.scale
      );

    const canvas = createIcon({
      seed: this.accountID,
      scale,
    });

    const canvasContainerNative = this.canvasContainer.nativeElement;

    while (canvasContainerNative.firstChild) {
      canvasContainerNative.removeChild(canvasContainerNative.lastChild);
    }

    canvasContainerNative.appendChild(canvas);
  }

}
