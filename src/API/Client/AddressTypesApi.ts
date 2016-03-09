/* tslint:disable:no-unused-variable member-ordering */
import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs';
//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface





import { Error } from './Error'

import { AddressType } from './AddressType'




//namespace API.Client {
'use strict';


export class AddressTypesApi {
  protected basePath = 'http://localhost:2000/odata';
  public defaultHeaders: any = {};

  static $inject: string[] = ['$http', '$httpParamSerializer'];

  constructor(protected $http: Http, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
    if (basePath) {
      this.basePath = basePath;
    }
  }

  private extendObj<T1, T2>(objA: T1, objB: T2) {
    for (let key in objB) {
      if (objB.hasOwnProperty(key)) {
        objA[key] = objB[key];
      }
    }
    return <T1 & T2>objA;
  }


  /**
   * Get EntitySet AddressTypes
   * Returns the EntitySet AddressTypes
   * @param $Expand Expand navigation property
   * @param $Filter filter property
   * @param $Select select structural property
   * @param $Orderby order by some property
   * @param $Top top elements
   * @param $Skip skip elements
   * @param $Count include count in response
   */
  public addressTypesGet($Expand?: string, $Filter?: string, $Select?: string, $Orderby?: string, $Top?: number, $Skip?: number, $Count?: boolean, extraHttpRequestParams?: any): Rx.Observable<AddressType> {
    const path = this.basePath + '/AddressTypes';

    let queryParameters: any = {};
    let headerParams: any = this.extendObj({}, this.defaultHeaders);



    if ($Expand !== undefined) {
      queryParameters['$expand'] = $Expand;
    }


    if ($Filter !== undefined) {
      queryParameters['$filter'] = $Filter;
    }


    if ($Select !== undefined) {
      queryParameters['$select'] = $Select;
    }


    if ($Orderby !== undefined) {
      queryParameters['$orderby'] = $Orderby;
    }


    if ($Top !== undefined) {
      queryParameters['$top'] = $Top;
    }


    if ($Skip !== undefined) {
      queryParameters['$skip'] = $Skip;
    }


    if ($Count !== undefined) {
      queryParameters['$count'] = $Count;
    }





    let httpRequestParams: any = {
      method: 'GET',
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
   * Post a new entity to EntitySet AddressTypes
   * Post a new entity to EntitySet AddressTypes
   * @param addressType The entity to post
   */
  public addressTypesPost(addressType?: AddressType, extraHttpRequestParams?: any): Rx.Observable<AddressType> {
    const path = this.basePath + '/AddressTypes';

    let queryParameters: any = {};
    let headerParams: any = this.extendObj({}, this.defaultHeaders);








    let httpRequestParams: any = {
      method: 'POST',
      url: path,
      json: true,
      data: addressType,


      params: queryParameters,
      headers: headerParams
    };

    if (extraHttpRequestParams) {
      httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http.request(httpRequestParams);
  }

  /**
   * Get entity from AddressTypes by key.
   * Returns the entity with the key from AddressTypes
   * @param addressTypeId key: AddressTypeId
   * @param $Select description
   */
  public addressTypesAddressTypeIdGet(addressTypeId: number, $Select?: string, extraHttpRequestParams?: any): Rx.Observable<AddressType> {
    const path = this.basePath + '/AddressTypes({AddressTypeId})'
      .replace('{' + 'AddressTypeId' + '}', String(addressTypeId));

    let queryParameters: any = {};
    let headerParams: any = this.extendObj({}, this.defaultHeaders);



    // verify required parameter 'addressTypeId' is set
    if (!addressTypeId) {
      throw new Error('Missing required parameter addressTypeId when calling addressTypesAddressTypeIdGet');
    }





    if ($Select !== undefined) {
      queryParameters['$select'] = $Select;
    }





    let httpRequestParams: any = {
      method: 'GET',
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
   * Delete entity in EntitySet AddressTypes
   * Delete entity in EntitySet AddressTypes
   * @param addressTypeId key: AddressTypeId
   * @param ifMatch If-Match header
   */
  public addressTypesAddressTypeIdDelete(addressTypeId: number, ifMatch?: string, extraHttpRequestParams?: any): Rx.Observable<{}> {
    const path = this.basePath + '/AddressTypes({AddressTypeId})'
      .replace('{' + 'AddressTypeId' + '}', String(addressTypeId));

    let queryParameters: any = {};
    let headerParams: any = this.extendObj({}, this.defaultHeaders);



    // verify required parameter 'addressTypeId' is set
    if (!addressTypeId) {
      throw new Error('Missing required parameter addressTypeId when calling addressTypesAddressTypeIdDelete');
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
   * Update entity in EntitySet AddressTypes
   * Update entity in EntitySet AddressTypes
   * @param addressTypeId key: AddressTypeId
   * @param addressType The entity to patch
   */
  public addressTypesAddressTypeIdPatch(addressTypeId: number, addressType?: AddressType, extraHttpRequestParams?: any): Rx.Observable<{}> {
    const path = this.basePath + '/AddressTypes({AddressTypeId})'
      .replace('{' + 'AddressTypeId' + '}', String(addressTypeId));

    let queryParameters: any = {};
    let headerParams: any = this.extendObj({}, this.defaultHeaders);



    // verify required parameter 'addressTypeId' is set
    if (!addressTypeId) {
      throw new Error('Missing required parameter addressTypeId when calling addressTypesAddressTypeIdPatch');
    }








    let httpRequestParams: any = {
      method: 'PATCH',
      url: path,
      json: true,
      data: addressType,


      params: queryParameters,
      headers: headerParams
    };

    if (extraHttpRequestParams) {
      httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http.request(httpRequestParams);
  }

}
//}

