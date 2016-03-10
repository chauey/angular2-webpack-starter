import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { ClientComponent } from '../client/client.component';
import { OrderComponent } from '../order/order.component';
import { ProductComponent } from '../product/product.component';
import { SupplierComponent } from '../supplier/supplier.component';

import { AddressComponent } from '../address/address.component';

import {RouterActive} from '../../directives/router-active';

@Component({
  selector: 'admin',
  directives: [...ROUTER_DIRECTIVES, RouterActive ],
  pipes: [],
  styles: [require('./admin.component.css')],
  template: require('./admin.component.html')
})

@RouteConfig([
  { path: '/address/...', component: AddressComponent, name: 'Address', useAsDefault: true },

  { path: '/client/...', component: ClientComponent, name: 'Client', useAsDefault: false },
  { path: '/order/...', component: OrderComponent, name: 'Order', useAsDefault: false },
  { path: '/product/...', component: ProductComponent, name: 'Product', useAsDefault: false },
  { path: '/supplier/...', component: SupplierComponent, name: 'Supplier', useAsDefault: false },
 ])

export class AdminComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Admin component');
  }

}
