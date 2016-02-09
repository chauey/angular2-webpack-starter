import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { ProductItemComponent } from './product-item.component';
import { ProductListComponent } from './product-list.component';
import { ProductImportComponent } from './product-import.component';

@Component({
  selector: 'dashboard',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./product.component.css')],
  template: require('./product.component.html')
})

@RouteConfig([
  { path: '/', component: ProductListComponent, name: 'List', useAsDefault: true },
  { path: '/:id', component: ProductItemComponent, name: 'Item', useAsDefault: false },
  { path: '/import', component: ProductImportComponent, name: 'Import', useAsDefault: false },
])

export class ProductComponent {
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Dashboard component');
  }

}
