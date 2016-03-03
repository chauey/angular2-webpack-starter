/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */
//import {Headers} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs'; // rxjs/add/operator/map

//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface

import { Address } from './Address'

import { Error } from './Error'

import { Injectable } from 'angular2/core';

//namespace API.Client {
    'use strict';



    export interface IAddressesApi {

        //basePath: string;
        
        //defaultHeaders: Headers;
        
        //$inject: string[];
        
        // Function types
        addressesGet(odata?: any, extraHttpRequestParams?: any);
        
        addressesGetArray(odata?: any, extraHttpRequestParams?: any);
    }



//}
