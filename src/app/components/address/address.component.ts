import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { AddressItemComponent } from './address-item.component';
import { AddressListComponent } from './address-list.component';

@Component({
  selector: 'dashboard',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./address.component.css')],
  template: require('./address.component.html')
})

@RouteConfig([
  { path: '/', component: AddressListComponent, name: 'List', useAsDefault: true },
  { path: '/:id', component: AddressItemComponent, name: 'Item', useAsDefault: false },
])

export class AddressComponent implements OnInit {
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Dashboard component');
  }

}
