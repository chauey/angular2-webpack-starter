import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

import { InventoryImportComponent } from './inventory-import.component';
import { InventoryListComponent } from './inventory-list.component';
import { InventoryItemComponent } from './inventory-item.component';

@Component({
  selector: 'inventory',
  directives: [...ROUTER_DIRECTIVES],
  providers: [DataService],
  styles: [require('./inventory.component.css')],
  template: require('./inventory.component.html')
})

@RouteConfig([
  { path: '/import', component: InventoryImportComponent, name: 'Import', useAsDefault: false },
  { path: '/', component: InventoryListComponent, name: 'List', useAsDefault: true },
  { path: '/:id', component: InventoryItemComponent, name: 'Item', useAsDefault: false },
])

export class InventoryComponent implements OnInit {
  constructor(private _dataService: DataService) {

  }

  searchValue: string = '';

  suppliers: any = this._dataService.supplierList;

  inventoryItems: any = this._dataService.inventoryItems;


  flattenedPriceCompareData: any = this._dataService.flattenedPriceCompareData;


  vendorCompareData: any = this._dataService.vendorCompareData;

  vendorCompareData2: any = this._dataService.vendorCompareData2;

  ngOnInit() {
    console.log('ngOnInit Inventory component');
  }
}
