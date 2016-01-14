import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

import { InventoryImport } from './inventory-import.component';
import { InventoryList } from './inventory-list.component';
import { InventoryItem } from './inventory-item.component';

@Component({
    selector: 'inventory',
    directives: [...ROUTER_DIRECTIVES],
    providers: [DataService],
    styles: [require('./inventory.component.css')],
    template: require('./inventory.component.html')
})

@RouteConfig([
  { path: '/import', component: InventoryImport, name: 'InventoryImport', useAsDefault: false },
  { path: '/', component: InventoryList, name: 'InventoryList', useAsDefault: true },
  { path: '/:id', component: InventoryItem, name: 'InventoryItem', useAsDefault: false },
])

export class InventoryComponent {
    constructor(private _dataService: DataService) {

    }

    searchValue: string = 'search string test';

    items: any = this._dataService.items;

    suppliers: any = this._dataService.suppliers;

    inventoryItems: any = this._dataService.inventoryItems;


    flattenedPriceCompareData: any = this._dataService.flattenedPriceCompareData;


    vendorCompareData: any = this._dataService.vendorCompareData;

    vendorCompareData2: any = this._dataService.vendorCompareData2;
}
