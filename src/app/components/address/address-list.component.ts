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

  searchValue: string = '';
  errorMessage: string;
  listWithCount: any;
  stateProvinceList: any;

  top: number = 5;
  skip: number = 0;
  count: boolean = true;
  expand: string = null;
  filter: string = null;
  select: string = null;
  orderBy: string = null;

  paginationData = {
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
        (error) => { this.errorMessage = <any>error; });

    this._AddressesApiLocal.addressesGet(this.expand, this.filter, this.select, this.orderBy, this.top, this.skip, this.count, null)
      .subscribe(
      addressListWithCount => this.listWithCount = addressListWithCount,
      error => this.errorMessage = <any>error);
  }

  edit(id: number) {
    this._router.navigate(['Item', { id: id }]);
    console.log('edit with id: ' + id);
  }

  delete(id: number) {
    console.log('delete with id: ' + id);
  }

  private setPage(pageNo: number): void {
    this.paginationData.currentPage = pageNo;
    this.skip = ((this.paginationData.currentPage - 1) * this.top);
    this.getList();
  };

  private pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    console.log(event);
    this.setPage(event.page);
  };

}
