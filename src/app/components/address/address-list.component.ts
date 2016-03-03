import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

import { Address } from '../../../API/Client/Address';

import { AddressesApi } from '../../../API/Client/AddressesApi';
import { IAddressesApi } from '../../../API/Client/IAddressesApi';

import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap';

@Component({
  selector: 'address-list',
  directives: [...ROUTER_DIRECTIVES, PAGINATION_DIRECTIVES],
  pipes: [],
  //providers: [AddressesApiLocal], // AddressesApi],
  styles: [require('./address-list.component.css')],
  template: require('./address-list.component.html')
})

export class AddressListComponent implements OnInit {

  searchValue: string = '';
  errorMessage: string;
  listWithCount: any; //Address[];
  odata = {
    top: 5,
    skip: 0,
    count: true
  }

  paginationData = {
    isBoundaryLinks: true,
    maxSize: 5,
    isRotate: false,
    currentPage: 1
  }

  constructor(private _router: Router, private _dataService: DataService,
    private _AddressesApi: AddressesApi // AddressesApi
  ) {
  }

  ngOnInit() {
    this.getList();
    console.log('ngOnInit address-list component');

  }

  getList() {
    // FROM AddressesApi
    this._AddressesApi.addressesGet(this.odata)//, undefined, undefined, undefined, 3)
      .subscribe(
      // function(listWithCount) {
      //   this.listWithCount = listWithCount;
      //   this.totalItems = listWithCount.count;
      // },
      addressListWithCount => this.listWithCount = addressListWithCount,//.addressList,
      error => this.errorMessage = <any>error);

    //---------------------------------------------------------------------------------------------

    // FROM AddressesApiLocal
    // this.listWithCount = {
    //   count: 0,
    //   list: this._AddressesApi.addressesGetArray(this.odata)
    // };

    //this.listWithCount.count = this.listWithCount.list.length;

  }

  //   private totalItems:number = 64;
  //   private currentPage:number = 4;
  //
  //   private maxSize:number = 5;
  // private bigTotalItems:number = 175;
  // private bigCurrentPage:number = 1;

  private setPage(pageNo: number): void {
    this.paginationData.currentPage = pageNo;
    this.odata.skip = ((this.paginationData.currentPage - 1) * this.odata.top);
    this.getList();
  };

  private pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    console.log(event);
    this.setPage(event.page);
  };

}
