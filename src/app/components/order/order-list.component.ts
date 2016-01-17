import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

@Component({
  selector: 'order-list',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [ ],
  providers: [DataService],
  styles: [ require('./order-list.component.css') ],
  template: require('./order-list.component.html')
})
export class OrderListComponent {

    searchValue: string = 'search string test';
    orders: any = this._dataService.orders;

  constructor(private _router: Router, private _dataService: DataService) {
  }

  ngOnInit() {
    console.log('ngOnInit order-list component');
  }

}
