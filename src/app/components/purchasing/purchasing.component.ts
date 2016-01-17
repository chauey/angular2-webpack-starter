import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

import { BidGeneratorComponent } from './bid-generator.component';
import { OrderItemComponent } from '../order/order-item.component';
import { OrderListComponent } from '../order/order-list.component';

@Component({
  selector: 'purchasing',
    directives: [...ROUTER_DIRECTIVES],
    providers: [DataService],
  pipes: [ ],
  styles: [ require('bootstrap/dist/css/bootstrap.min.css'), require('./purchasing.component.css') ],
  template: require('./purchasing.component.html')
})

@RouteConfig([
  { path: '/generate-bid', component: BidGeneratorComponent, name: 'BidGenerator', useAsDefault: false },
  { path: '/orders', component: OrderListComponent, name: 'OrderList', useAsDefault: true },
  { path: '/orders/:id', component: OrderItemComponent, name: 'OrderItem', useAsDefault: false },
])

export class PurchasingComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit purchasing component');
  }

}
