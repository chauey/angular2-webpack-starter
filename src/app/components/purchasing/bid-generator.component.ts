import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

@Component({
  selector: 'bid-generator',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  providers: [],
  styles: [ require('bootstrap/dist/css/bootstrap.min.css'), require('./bid-generator.component.css') ],
  template: require('./bid-generator.component.html')
})
export class BidGeneratorComponent {

    searchValue: string = '';
    flattenedPriceCompareData: any = this._dataService.flattenedPriceCompareData;

  constructor(private _router: Router, private _dataService: DataService) {
  }

 
  filter() {
    console.log('filter with value: ' + this.searchValue);
  }
  createOrders() {
    console.log('createOrders called');
      
  }

  ngOnInit() {
    console.log('ngOnInit bid-generator component');
  }

}
