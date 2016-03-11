/* tslint:disable:no-unused-variable member-ordering */
import { Injectable } from 'angular2/core';
import {Http, HTTP_PROVIDERS, RequestOptions, Headers, Response, Request, RequestOptionsArgs, RequestMethod, URLSearchParams} from 'angular2/http';

import * as Rx from 'rxjs';

import { IApi } from '../Client/IApi';
import { Error } from '../Client/Error';
import { HttpHelper } from '../Client/HttpHelper';
import { Validation } from './Validation';
import { BaseApi } from '../Client/BaseApi';

'use strict';

@Injectable()
export class ValidationsApi extends BaseApi<Validation> { //implements IApi<IAddress> {
    _keyName = 'validationId';
    _resourceName = 'validations';

    protected _basePath = 'http://localhost:2000/odata';
    public _defaultHeaders: Headers = new Headers({});

    constructor(protected _http: Http) { //, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        super(_http);
    }

}
