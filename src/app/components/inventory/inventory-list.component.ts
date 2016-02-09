import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

import { EntityFieldValuePipe } from '../../pipes/entity-field-value.pipe';

@Component({
  selector: 'inventory-list',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [EntityFieldValuePipe],
  providers: [],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./inventory-list.component.css')],
  template: require('./inventory-list.component.html')
})
export class InventoryListComponent {

  searchValue: string = '';
  suppliers: any = this._dataService.supplierList;
  inventoryItemsView: any = this._dataService.inventoryItemsView;
  inventoryItems: any = this._dataService.inventoryItems;

  constructor(private _router: Router, private _dataService: DataService) {
  }

  generateOrder() {
    this.determineWhichProductsNeedOrdering();
    this.updateWithQuantityShort();
  }

  determineWhichProductsNeedOrdering() {
    for (let i = 0; i < this._dataService.inventoryItemsView.length; i++) {
      console.log(this._dataService.inventoryItemsView[i]);
      if (this._dataService.inventoryItemsView[i].count < this._dataService.inventoryItemsView[i].par) {
        this._dataService.inventoryItemsView[i].isNeedOrdering = true;
      }
    }
  }

  updateWithQuantityShort() {
    for (let i = 0; i < this._dataService.inventoryItemsView.length; i++) {
      if (this._dataService.inventoryItemsView[i].count < this._dataService.inventoryItemsView[i].par) {
        this._dataService.inventoryItemsView[i].quantityShort =
          this._dataService.inventoryItemsView[i].par
          - this._dataService.inventoryItemsView[i].count;
      }
    }
  }

  edit(id: number) {
    this._router.navigate(['Item', { id: id }]);
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
