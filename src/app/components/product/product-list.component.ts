import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

@Component({
  selector: 'product-list',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./product-list.component.css')],
  template: require('./product-list.component.html')
})

export class ProductListComponent implements OnInit {

  searchValue: string = '';
  suppliers: any = this._dataService.supplierList;
  productList: any = this._dataService.productList;

  constructor(private _router: Router, private _dataService: DataService) {
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
    console.log('ngOnInit product-list component');
  }

}
