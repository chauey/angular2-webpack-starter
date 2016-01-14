import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import { DataService } from '../../services/DataService';

@Component({
  selector: 'inventory-item',
  directives: [],
  pipes: [],
  providers: [],
  styles: [ require('./inventory-item.component.css') ],
  template: require('./inventory-item.component.html')
})
export class InventoryItem implements OnInit {
  // TypeScript public modifiers
  constructor(private _router: Router,
    private _routeParams: RouteParams,
    private _service: DataService) {

  }
  
  id: number = undefined;

  ngOnInit() {
    console.log('ngOnInit inventory-item component');

    this.id = +this._routeParams.get('id');
    console.log('ngOnInit inventory-item component id is: ' + this.id);
    //this._service.getHero(id).then(hero => this.hero = hero);
  }

}
