import { OwlCarouselModule } from '../owl-carousel/index.module';
import { TickerCarouselComponent } from './ticker-carousel.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
      BrowserModule,
      OwlCarouselModule
    ],
    declarations: [
        TickerCarouselComponent,
    ],
    exports: [
        TickerCarouselComponent,
    ]
})
export class TickerCarouselModule {

}
