/// <reference path="api.d.ts" />

//namespace API.Client {
    'use strict';




    export interface Address {



        /**
         * AddressId
         */

        addressId?: number;



        /**
         * AddressLine1
         */

        addressLine1?: string;



        /**
         * AddressLine2
         */

        addressLine2?: string;



        /**
         * City
         */

        city?: string;



        /**
         * StateProvinceId
         */

        stateProvinceId?: number;



        /**
         * PostalCode
         */

        postalCode?: string;



        /**
         * SpatialLocation
         */

        spatialLocation?: any;//System.Data.Entity.Spatial.DbGeography;



        /**
         * Rowguid
         */

        rowguid?: string;



        /**
         * ModifiedDate
         */

        modifiedDate?: Date;

    }




//}
