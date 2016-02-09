/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */
import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs';
//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface





import { Error } from './Error'

import { BusinessEntityAddress } from './BusinessEntityAddress'




//namespace API.Client {
    'use strict';


    export class BusinessEntityAddressesApi {
        protected basePath = 'http://localhost:2000/odata';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(protected $http: Http, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }


        /**
         * Get EntitySet BusinessEntityAddresses
         * Returns the EntitySet BusinessEntityAddresses
         * @param $Expand Expand navigation property
         * @param $Filter filter property
         * @param $Select select structural property
         * @param $Orderby order by some property
         * @param $Top top elements
         * @param $Skip skip elements
         * @param $Count include count in response
         */
        public businessEntityAddressesGet ($Expand?: string, $Filter?: string, $Select?: string, $Orderby?: string, $Top?: number, $Skip?: number, $Count?: boolean, extraHttpRequestParams?: any ) : Rx.Observable<BusinessEntityAddress> {
            const path = this.basePath + '/BusinessEntityAddresses';

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
         * Post a new entity to EntitySet BusinessEntityAddresses
         * Post a new entity to EntitySet BusinessEntityAddresses
         * @param businessEntityAddress The entity to post
         */
        public businessEntityAddressesPost (businessEntityAddress?: BusinessEntityAddress, extraHttpRequestParams?: any ) : Rx.Observable<BusinessEntityAddress> {
            const path = this.basePath + '/BusinessEntityAddresses';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);








            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: businessEntityAddress,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http.request(httpRequestParams);
        }

        /**
         * Get entity from BusinessEntityAddresses by key.
         * Returns the entity with the key from BusinessEntityAddresses
         * @param businessEntityId key: BusinessEntityId
         * @param addressId key: AddressId
         * @param addressTypeId key: AddressTypeId
         * @param $Select description
         */
        public businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdGet (businessEntityId: number, addressId: number, addressTypeId: number, $Select?: string, extraHttpRequestParams?: any ) : Rx.Observable<BusinessEntityAddress> {
            const path = this.basePath + '/BusinessEntityAddresses({BusinessEntityId}, {AddressId}, {AddressTypeId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'AddressId' + '}', String(addressId))
                .replace('{' + 'AddressTypeId' + '}', String(addressTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdGet');
            }



            // verify required parameter 'addressId' is set
            if (!addressId) {
                throw new Error('Missing required parameter addressId when calling businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdGet');
            }



            // verify required parameter 'addressTypeId' is set
            if (!addressTypeId) {
                throw new Error('Missing required parameter addressTypeId when calling businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdGet');
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
         * Delete entity in EntitySet BusinessEntityAddresses
         * Delete entity in EntitySet BusinessEntityAddresses
         * @param businessEntityId key: BusinessEntityId
         * @param addressId key: AddressId
         * @param addressTypeId key: AddressTypeId
         * @param ifMatch If-Match header
         */
        public businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdDelete (businessEntityId: number, addressId: number, addressTypeId: number, ifMatch?: string, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/BusinessEntityAddresses({BusinessEntityId}, {AddressId}, {AddressTypeId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'AddressId' + '}', String(addressId))
                .replace('{' + 'AddressTypeId' + '}', String(addressTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdDelete');
            }



            // verify required parameter 'addressId' is set
            if (!addressId) {
                throw new Error('Missing required parameter addressId when calling businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdDelete');
            }



            // verify required parameter 'addressTypeId' is set
            if (!addressTypeId) {
                throw new Error('Missing required parameter addressTypeId when calling businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdDelete');
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
         * Update entity in EntitySet BusinessEntityAddresses
         * Update entity in EntitySet BusinessEntityAddresses
         * @param businessEntityId key: BusinessEntityId
         * @param addressId key: AddressId
         * @param addressTypeId key: AddressTypeId
         * @param businessEntityAddress The entity to patch
         */
        public businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdPatch (businessEntityId: number, addressId: number, addressTypeId: number, businessEntityAddress?: BusinessEntityAddress, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/BusinessEntityAddresses({BusinessEntityId}, {AddressId}, {AddressTypeId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'AddressId' + '}', String(addressId))
                .replace('{' + 'AddressTypeId' + '}', String(addressTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdPatch');
            }



            // verify required parameter 'addressId' is set
            if (!addressId) {
                throw new Error('Missing required parameter addressId when calling businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdPatch');
            }



            // verify required parameter 'addressTypeId' is set
            if (!addressTypeId) {
                throw new Error('Missing required parameter addressTypeId when calling businessEntityAddressesBusinessEntityIdAddressIdAddressTypeIdPatch');
            }








            let httpRequestParams: any = {
                method: 'PATCH',
                url: path,
                json: true,
                data: businessEntityAddress,
                
                
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

