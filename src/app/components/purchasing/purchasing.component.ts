import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

import { BidGeneratorComponent } from './bid-generator.component';
// import { OrderItemComponent } from '../order/order-item.component';
// import { OrderListComponent } from '../order/order-list.component';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'purchasing',
  directives: [...ROUTER_DIRECTIVES],
  providers: [DataService],
  pipes: [],
  styles: [require('./purchasing.component.css')],
  template: require('./purchasing.component.html')
})

@RouteConfig([
  { path: '/generate-bid', component: BidGeneratorComponent, name: 'BidGenerator', useAsDefault: false },
  // { path: '/order', component: OrderListComponent, name: 'OrderList', useAsDefault: true },
  // { path: '/order/:id', component: OrderItemComponent, name: 'OrderItem', useAsDefault: false },
  { path: '/order/...', component: OrderComponent, name: 'Order', useAsDefault: true },
])

export class PurchasingComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit purchasing component');
  }

}
