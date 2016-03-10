import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

import { DataTransformPipe } from '../../pipes/dataTransform.pipe';

import { Address } from '../../../API/Client/Address';

import { AddressesApiLocal } from '../../../API/Client/AddressesApiLocal';
import { IAddressesApi } from '../../../API/Client/IAddressesApi';
import { StateProvinceApiLocal } from '../../../API/Client/StateProvinceApiLocal';

//import {Pagination} from 'ng2-bootstrap/ng2-bootstrap';
//import ng2Bootstrap = require('ng2-bootstrap/');
//import {Pagination} from 'ng2-bootstrap/components/pagination';
import { PAGINATION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'address-list',
  directives: [...ROUTER_DIRECTIVES, ...PAGINATION_DIRECTIVES ],
  pipes: [DataTransformPipe],
  providers: [StateProvinceApiLocal], // AddressesApi],
  styles: [require('./address-list.component.css')],
  template: require('./address-list.component.html')
})

export class AddressListComponent implements OnInit {

  _keyName: string = 'addressId';
  _searchValue: string = '';
  _errorMessage: string;
  _listWithCount: any;
  stateProvinceList: any;

  _top: number = 5;
  _skip: number = 0;
  _count: boolean = true;
  _expand: string = null;
  _filter: string = null;
  _select: string = null;
  _orderBy: string = null;

  _paginationData = {
    isBoundaryLinks: true,
    maxSize: 10,
    isRotate: false,
    currentPage: 1,
    // itemsPerPage: this.top
  };

  constructor(
    private _router: Router,
    private _dataService: DataService,
    private _AddressesApiLocal: AddressesApiLocal,
    private _StateProvinceApiLocal: StateProvinceApiLocal // AddressesApi
  ) {
  }

  ngOnInit() {
    this.getList();
    console.log('ngOnInit address-list component');

  }

  getList() {
    this._StateProvinceApiLocal
      .get()
      .subscribe(
        (stateListWithCount) => { this.stateProvinceList = stateListWithCount.list; },
        (error) => { this._errorMessage = <any>error; });

    this._AddressesApiLocal.get(this._expand, this._filter, this._select, this._orderBy, this._top, this._skip, this._count, null)
      .subscribe(
      addressListWithCount => this._listWithCount = addressListWithCount,
      error => this._errorMessage = <any>error);
  }

  edit(id: number) {
    this._router.navigate(['Item', { id: id }]);
    console.log('edit with id: ' + id);
  }

  delete(id: number) {
    console.log('delete with id: ' + id);
  }

  private setPage(pageNo: number): void {
    this._paginationData.currentPage = pageNo;
    this._skip = ((this._paginationData.currentPage - 1) * this._top);
    this.getList();
  };

  private pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    console.log(event);
    this.setPage(event.page);
  };

}
