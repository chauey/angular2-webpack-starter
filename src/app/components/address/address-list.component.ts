import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

import { Address } from '../../../API/Client/Address';

import { AddressesApiLocal } from '../../../API/Client/AddressesApiLocal';
import { IAddressesApi } from '../../../API/Client/IAddressesApi';

import {Pagination} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'address-list',
  directives: [...ROUTER_DIRECTIVES, Pagination],
  pipes: [],
  //providers: [AddressesApiLocal], // AddressesApi],
  styles: [require('./address-list.component.css')],
  template: require('./address-list.component.html')
})

export class AddressListComponent implements OnInit {

  searchValue: string = '';
  errorMessage: string;
  listWithCount: any; //Address[];

  top: number = 5;
  skip: number =  0;
  count: boolean =  true;
  expand: string = null;
  filter: string = null;
  select: string = null;
  orderBy: string = null;


  paginationData = {
    isBoundaryLinks: true,
    maxSize: 10,
    isRotate: false,
    currentPage: 1,
    //itemsPerPage: this.top
  }

  constructor(private _router: Router, private _dataService: DataService,
    private _AddressesApiLocal: AddressesApiLocal // AddressesApi
  ) {
  }

  ngOnInit() {
    this.getList();
    console.log('ngOnInit address-list component');

  }

  getList() {
    this._AddressesApiLocal.addressesGet(this.expand, this.filter, this.select, this.orderBy, this.top, this.skip, this.count, null)//, undefined, undefined, undefined, 3)
      .subscribe(
      // function(listWithCount) {
      //   this.listWithCount = listWithCount;
      //   this.totalItems = listWithCount.count;
      // },
      addressListWithCount => this.listWithCount = addressListWithCount,//.addressList,
      error => this.errorMessage = <any>error);
  }

  edit(id: number) {
    this._router.navigate(['Item', { id: id }]);
    console.log('edit with id: ' + id);
  }

  delete(id: number) {
    console.log('delete with id: ' + id);
  }

  //   private totalItems:number = 64;
  //   private currentPage:number = 4;
  //
  //   private maxSize:number = 5;
  // private bigTotalItems:number = 175;
  // private bigCurrentPage:number = 1;

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
