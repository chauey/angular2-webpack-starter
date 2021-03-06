import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { OrderItemComponent } from './order-item.component';
import { OrderListComponent } from './order-list.component';

@Component({
  selector: 'dashboard',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./order.component.css')],
  template: require('./order.component.html')
})

@RouteConfig([
  { path: '/', component: OrderListComponent, name: 'List', useAsDefault: true },
  { path: '/:id', component: OrderItemComponent, name: 'Item', useAsDefault: false },
])

export class OrderComponent implements OnInit {
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Dashboard component');
  }

}
