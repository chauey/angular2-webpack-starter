/// <reference path="api.d.ts" />
import { Injectable } from 'angular2/core';

import { AddressInterface } from './AddressInterface'

//namespace API.Client {
    'use strict';
    
    @Injectable()    
    export class Address implements AddressInterface {
        constructor () {
            this.addressId = 0;
            this.addressLine1 = '';
            this.addressLine2 = '';
            this.city = '';
            this.stateProvinceId = 0;
            this.postalCode = '';
            this.spatialLocation = {};
            this.rowguid = '';
            this.modifiedDate = new Date();
        }
    }

//}