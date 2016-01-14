import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'inventory-list',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  providers: [],
  styles: [ require('./inventory-list.component.css') ],
  template: require('./inventory-list.component.html')
})
export class InventoryList {
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit inventory-list component');
  }

}
