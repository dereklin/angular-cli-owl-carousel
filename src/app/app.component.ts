import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tickers: string[];
  constructor() {
    this.tickers = ['GOOG', 'MSFT', 'YHOO'];
  }

}
