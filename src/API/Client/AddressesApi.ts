/* tslint:disable:no-unused-variable member-ordering */
import {Http, HTTP_PROVIDERS, RequestOptions, Headers, Response, Request, RequestOptionsArgs, RequestMethod, URLSearchParams} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs'; // rxjs/add/operator/map

//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface

import { IAddress } from './AddressInterface';

import { Error } from './Error';

import { Injectable } from 'angular2/core';

import { IAddressesApi } from './IAddressesApi';

import { HttpHelper } from './HttpHelper';

//namespace API.Client {
'use strict';

@Injectable()
export class AddressesApi implements IAddressesApi {
  protected basePath = 'http://localhost:2000/odata';
  public defaultHeaders: Headers = new Headers({});

  static $inject: string[] = ['$http', '$httpParamSerializer'];
  //searchParams :SearchParams;

  constructor(protected $http: Http) { //, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
    // if (basePath) {
    //     this.basePath = basePath;
    // }
  }

  private extendObj<T1, T2>(objA: T1, objB: T2) {
    for (let key in objB) {
      if (objB.hasOwnProperty(key)) {
        objA[key] = objB[key];
      }
    }
    return <T1 & T2>objA;
  }

  // TOOD: https://github.com/auth0/node-odata-parser have client-side paging for testing/prototype?
  // http://stackoverflow.com/questions/28853686/sort-array-by-attribute
  // http://www.w3schools.com/jsref/jsref_slice_array.asp


  /**
   * Get EntitySet Addresses
   * Returns the EntitySet Addresses
   * @param $Expand Expand navigation property
   * @param $Filter filter property
   * @param $Select select structural property
   * @param $Orderby order by some property
   * @param $Top top elements
   * @param $Skip skip elements
   * @param $Count include count in response
   */
  public addressesGet(expand?: string, filter?: string, select?: string, orderBy?: string, top?: number, skip?: number, count?: boolean
    , extraHttpRequestParams?: any): Rx.Observable<{ count: number, list: IAddress[] }> {

    let oData = HttpHelper.createOData(select, orderBy, expand, filter, top, skip, count);
    let urlSearchParams = HttpHelper.createUrlSearchParamsFromOData(oData);

    const path = this.basePath + '/Addresses';

    let options = new RequestOptions({
      method: RequestMethod.Get,
      url: path,
      search: urlSearchParams
    });

    let req = new Request(options);

    return this.$http.request(req)
      .map(
      (res) => {
        let listWithCount = {
          count: res.json()['@odata.count'],
          list: res.json().value
        };
        this.changeDateStringToDateObject(listWithCount.list);
        return listWithCount;
      }
      )
      //res => function(res) { return {count: res.json(), addressList: <Address[]>res.json().value};})
      //{count: res.json(), addressList: <Address[]>res.json().value})//<Address[]>res.json().value//.value)//data)
      .catch(this.handleError);
  }

  private changeDateStringToDateObject(list) {
    list.forEach(address => {
      address.ModifiedDate = new Date(address.ModifiedDate);
    });
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Rx.Observable.throw(error.json().error || 'Server error');
  }

  /**
   * Post a new entity to EntitySet Addresses
   * Post a new entity to EntitySet Addresses
   * @param address The entity to post
   */
  public addressesPost(address?: IAddress, extraHttpRequestParams?: any): Rx.Observable<IAddress> {
    const path = this.basePath + '/Addresses';

    let queryParameters: any = {};
    let headerParams: any = this.extendObj({}, this.defaultHeaders);

    let httpRequestParams: any = {
      method: 'POST',
      url: path,
      json: true,
      data: address,

      params: queryParameters,
      headers: headerParams
    };

    if (extraHttpRequestParams) {
      httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http.request(httpRequestParams);
  }

  /**
   * Get entity from Addresses by key.
   * Returns the entity with the key from Addresses
   * @param addressId key: AddressId
   * @param $Select description
   */
  public addressesAddressIdGet(addressId: number, select?: string, extraHttpRequestParams?: any):
    Rx.Observable<any> {
    const path = this.basePath + '/Addresses({AddressId})'
      .replace('{' + 'AddressId' + '}', String(addressId));

    //let queryParameters: any = {};
    //let headerParams: any = this.extendObj({}, this.defaultHeaders);

    // verify required parameter 'addressId' is set
    if (!addressId) {
      throw new Error('Missing required parameter addressId when calling addressesAddressIdGet');
    }

    let oData = HttpHelper.createOData(select, null, null, null, null, null, null);
    let urlSearchParams = HttpHelper.createUrlSearchParamsFromOData(oData);


    // let httpRequestParams: any = {
    //   method: 'GET',
    //   url: path,
    //   json: true,

    //   params: queryParameters,
    //   headers: headerParams
    // };

    var options = new RequestOptions({
      method: RequestMethod.Get,
      url: path,
      search: urlSearchParams
    });

    var req = new Request(options);

    return this.$http.request(req)
      .map(
      (res) => {
        return res.json();
      }
      ).catch(this.handleError);

  }

  /**
   * Delete entity in EntitySet Addresses
   * Delete entity in EntitySet Addresses
   * @param addressId key: AddressId
   * @param ifMatch If-Match header
   */
  public addressesAddressIdDelete(addressId: number, ifMatch?: string, extraHttpRequestParams?: any): Rx.Observable<{}> {
    const path = this.basePath + '/Addresses({AddressId})'
      .replace('{' + 'AddressId' + '}', String(addressId));

    let queryParameters: any = {};
    let headerParams: any = this.extendObj({}, this.defaultHeaders);

    // verify required parameter 'addressId' is set
    if (!addressId) {
      throw new Error('Missing required parameter addressId when calling addressesAddressIdDelete');
    }

    headerParams['If-Match'] = ifMatch;

    let httpRequestParams: any = {
      method: 'DELETE',
      url: path,
      json: true,

      params: queryParameters,
      headers: headerParams
    };

    if (extraHttpRequestParams) {
      httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http.request(httpRequestParams);
  }

  /**
   * Update entity in EntitySet Addresses
   * Update entity in EntitySet Addresses
   * @param addressId key: AddressId
   * @param address The entity to patch
   */
  public addressesAddressIdPatch(addressId: number, address?: IAddress, extraHttpRequestParams?: any): Rx.Observable<{}> {
    const path = this.basePath + '/Addresses({AddressId})'
      .replace('{' + 'AddressId' + '}', String(addressId));

    let queryParameters: any = {};
    let headerParams: any = this.extendObj({}, this.defaultHeaders);

    // verify required parameter 'addressId' is set
    if (!addressId) {
      throw new Error('Missing required parameter addressId when calling addressesAddressIdPatch');
    }

    let httpRequestParams: any = {
      method: 'PATCH',
      url: path,
      json: true,
      data: address,

      params: queryParameters,
      headers: headerParams
    };

    if (extraHttpRequestParams) {
      httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http.request(httpRequestParams);
  }

}

