import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

import { Address } from '../../../API/Client/Address';

import { AddressesApi } from '../../../API/Client/AddressesApi';

@Component({
  selector: 'address-list',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  providers: [], // AddressesApi],
  styles: [require('./address-list.component.css')],
  template: require('./address-list.component.html')
})

export class AddressListComponent implements OnInit {

  searchValue: string = '';
  errorMessage: string;
  addressList: Address[];
  odata = {
    top: 2,
    skip: 1
  }

  constructor(private _router: Router, private _dataService: DataService
    , private _AddressesApi: AddressesApi
  ) {
  }

  ngOnInit() {
    this.getAddressList();
  }

  getAddressList() {
    this._AddressesApi.addressesGet(this.odata)//, undefined, undefined, undefined, 3)
      .subscribe(
      addressList => this.addressList = addressList,
      error => this.errorMessage = <any>error);
    console.log('ngOnInit address-list component');
  }

}
