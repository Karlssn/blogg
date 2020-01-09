import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
***REMOVED***
export class AppComponent {
  title = 'mjblogg';
  amount: number;
  constructor(private _dataService: DataService) { 
    this._dataService.getAmount()
    .subscribe(res => this.amount = res);
  }

}
