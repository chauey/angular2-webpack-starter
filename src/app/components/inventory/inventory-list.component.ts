import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

@Component({
  selector: 'inventory-list',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  providers: [],
  styles: [ require('./inventory-list.component.css') ],
  template: require('./inventory-list.component.html')
})
export class InventoryList {

    searchValue: string = 'search string test';
    items: any = this._dataService.items;
    suppliers: any = this._dataService.suppliers;
    inventoryItemsView : any = this._dataService.inventoryItemsView;
    inventoryItems: any = this._dataService.inventoryItems;

  constructor(private _router: Router, private _dataService: DataService) {
  }

  edit(id: number) {
    this._router.navigate( ['InventoryItem', { id: id }] );
    console.log('edit with id: ' + id);
  }

  delete(id: number) {
    console.log('delete with id: ' + id);
  }
  
  filter() {
    console.log('filter with value: ' + this.searchValue);
  }

  ngOnInit() {
    console.log('ngOnInit inventory-list component');
  }

}
