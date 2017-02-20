import { ChangeDetectionStrategy, Component, DoCheck, 
  ElementRef, HostBinding, Input, OnChanges } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'owl-carousel',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwlCarouselComponent implements OnChanges {
  @HostBinding('class') defaultClass = 'owl-carousel';
  @Input() options: Object = {};
  @Input() public tickers: string[];

  $owlElement: any;

  constructor(private el: ElementRef) {}

  public ngOnChanges() {
    if (this.$owlElement) {
      setTimeout(() => {
        this.$owlElement = $(this.el.nativeElement).owlCarousel(this.options);
      }, 0);
    }
  }

  ngAfterViewInit() {
    this.$owlElement = $(this.el.nativeElement).owlCarousel(this.options);
  }

  public ngOnDestroy() {
    this.$owlElement.owlCarousel('destroy');
    this.$owlElement = null;
  }
}