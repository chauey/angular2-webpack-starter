import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { ClientItemComponent } from './client-item.component';
import { ClientListComponent } from './client-list.component';

@Component({
  selector: 'client',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./client.component.css')],
  template: require('./client.component.html')
})

@RouteConfig([
  { path: '/', component: ClientListComponent, name: 'List', useAsDefault: true },
  { path: '/:id', component: ClientItemComponent, name: 'Item', useAsDefault: false },
])

export class ClientComponent implements OnInit{
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Dashboard component');
  }

}
