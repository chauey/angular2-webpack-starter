/* tslint:disable:no-unused-variable member-ordering */
import { Injectable } from 'angular2/core';
import {Http, HTTP_PROVIDERS, RequestOptions, Headers, Response, Request, RequestOptionsArgs, RequestMethod, URLSearchParams} from 'angular2/http';

import * as Rx from 'rxjs';

import { IApi } from './IApi';
import { Error } from './Error';
import { HttpHelper } from './HttpHelper';
import { StateProvince } from './StateProvince';
import { BaseApi } from './BaseApi';

'use strict';

@Injectable()
export class StateProvincesApi extends BaseApi<StateProvince> { //implements IApi<IAddress> {
  _keyName = 'stateProvinceId';
  _resourceName = 'stateProvinces';

  protected _basePath = 'http://localhost:2000/odata';
  public _defaultHeaders: Headers = new Headers({});

  constructor(protected _http: Http) { //, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
    super(_http);
  }

}
