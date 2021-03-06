import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { SupplierItemComponent } from './supplier-item.component';
import { SupplierListComponent } from './supplier-list.component';

@Component({
  selector: 'dashboard',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./supplier.component.css')],
  template: require('./supplier.component.html')
})

@RouteConfig([
  { path: '/', component: SupplierListComponent, name: 'List', useAsDefault: true },
  { path: '/:id', component: SupplierItemComponent, name: 'Item', useAsDefault: false },
])

export class SupplierComponent implements OnInit {
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Dashboard component');
  }

}
