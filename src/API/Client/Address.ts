import { Injectable } from 'angular2/core';
import { IAddress } from './AddressInterface';

'use strict';

@Injectable()
export class Address implements IAddress {
  addressId: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  stateProvinceId: number;
  postalCode: string;
  spatialLocation: any; //System.Data.Entity.Spatial.DbGeography;
  rowguid: string;
  modifiedDate: Date;
}
