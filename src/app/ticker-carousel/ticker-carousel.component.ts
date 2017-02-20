import { Observable } from 'rxjs/Observable';
import { ElementRef, Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import * as $ from 'jquery';
import 'owl.carousel';

@Component({
    selector: 'ticker-carousel',
    templateUrl: 'ticker-carousel.component.html',
    styleUrls: ['ticker-carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickerCarouselComponent {
  @HostBinding('class') defaultClass = 'owl-carousel';
  selectedCarouselTicker: string = '';
  @Input() options: Object = {};
  @Input() public tickers: string[];

  public $owlElement: any;

  constructor(private el: ElementRef) { }

  public ngOnChanges() {
    if (this.$owlElement) {
    setTimeout(() => {
      console.log("carousel changed");
      this.$owlElement = $(this.el.nativeElement).owlCarousel(this.options);
    }, 0);
    }
  }

  public ngAfterViewInit() {
    this.$owlElement = $(this.el.nativeElement).owlCarousel(this.options);
  }

  public ngOnDestroy() {
    this.$owlElement.owlCarousel('destroy');
    this.$owlElement = null;
  }
}
