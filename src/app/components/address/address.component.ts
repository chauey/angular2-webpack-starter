import {Component, OnInit, provide} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { AddressItemComponent } from './address-item.component';
import { AddressListComponent } from './address-list.component';

//import { AddressesApi } from '../../../API/Client/AddressesApi';
//import { AddressesApiLocal } from '../../../API/Client/AddressesApiLocal';
//import { IAddressesApi } from '../../../API/Client/IAddressesApi';

@Component({
  selector: 'dashboard',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  providers: [],
  styles: [require('./address.component.scss')],
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
