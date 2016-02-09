/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */
import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs';
//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface





import { Error } from './Error'

import { PersonPhone } from './PersonPhone'




//namespace API.Client {
    'use strict';


    export class PersonPhonesApi {
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
         * Get EntitySet PersonPhones
         * Returns the EntitySet PersonPhones
         * @param $Expand Expand navigation property
         * @param $Filter filter property
         * @param $Select select structural property
         * @param $Orderby order by some property
         * @param $Top top elements
         * @param $Skip skip elements
         * @param $Count include count in response
         */
        public personPhonesGet ($Expand?: string, $Filter?: string, $Select?: string, $Orderby?: string, $Top?: number, $Skip?: number, $Count?: boolean, extraHttpRequestParams?: any ) : Rx.Observable<PersonPhone> {
            const path = this.basePath + '/PersonPhones';

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
         * Post a new entity to EntitySet PersonPhones
         * Post a new entity to EntitySet PersonPhones
         * @param personPhone The entity to post
         */
        public personPhonesPost (personPhone?: PersonPhone, extraHttpRequestParams?: any ) : Rx.Observable<PersonPhone> {
            const path = this.basePath + '/PersonPhones';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);








            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: personPhone,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http.request(httpRequestParams);
        }

        /**
         * Get entity from PersonPhones by key.
         * Returns the entity with the key from PersonPhones
         * @param businessEntityId key: BusinessEntityId
         * @param phoneNumber key: PhoneNumber
         * @param phoneNumberTypeId key: PhoneNumberTypeId
         * @param $Select description
         */
        public personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdGet (businessEntityId: number, phoneNumber: string, phoneNumberTypeId: number, $Select?: string, extraHttpRequestParams?: any ) : Rx.Observable<PersonPhone> {
            const path = this.basePath + '/PersonPhones({BusinessEntityId}, &#39;{PhoneNumber}&#39;, {PhoneNumberTypeId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'PhoneNumber' + '}', String(phoneNumber))
                .replace('{' + 'PhoneNumberTypeId' + '}', String(phoneNumberTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdGet');
            }



            // verify required parameter 'phoneNumber' is set
            if (!phoneNumber) {
                throw new Error('Missing required parameter phoneNumber when calling personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdGet');
            }



            // verify required parameter 'phoneNumberTypeId' is set
            if (!phoneNumberTypeId) {
                throw new Error('Missing required parameter phoneNumberTypeId when calling personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdGet');
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
         * Delete entity in EntitySet PersonPhones
         * Delete entity in EntitySet PersonPhones
         * @param businessEntityId key: BusinessEntityId
         * @param phoneNumber key: PhoneNumber
         * @param phoneNumberTypeId key: PhoneNumberTypeId
         * @param ifMatch If-Match header
         */
        public personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdDelete (businessEntityId: number, phoneNumber: string, phoneNumberTypeId: number, ifMatch?: string, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/PersonPhones({BusinessEntityId}, &#39;{PhoneNumber}&#39;, {PhoneNumberTypeId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'PhoneNumber' + '}', String(phoneNumber))
                .replace('{' + 'PhoneNumberTypeId' + '}', String(phoneNumberTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdDelete');
            }



            // verify required parameter 'phoneNumber' is set
            if (!phoneNumber) {
                throw new Error('Missing required parameter phoneNumber when calling personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdDelete');
            }



            // verify required parameter 'phoneNumberTypeId' is set
            if (!phoneNumberTypeId) {
                throw new Error('Missing required parameter phoneNumberTypeId when calling personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdDelete');
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
         * Update entity in EntitySet PersonPhones
         * Update entity in EntitySet PersonPhones
         * @param businessEntityId key: BusinessEntityId
         * @param phoneNumber key: PhoneNumber
         * @param phoneNumberTypeId key: PhoneNumberTypeId
         * @param personPhone The entity to patch
         */
        public personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdPatch (businessEntityId: number, phoneNumber: string, phoneNumberTypeId: number, personPhone?: PersonPhone, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/PersonPhones({BusinessEntityId}, &#39;{PhoneNumber}&#39;, {PhoneNumberTypeId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'PhoneNumber' + '}', String(phoneNumber))
                .replace('{' + 'PhoneNumberTypeId' + '}', String(phoneNumberTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdPatch');
            }



            // verify required parameter 'phoneNumber' is set
            if (!phoneNumber) {
                throw new Error('Missing required parameter phoneNumber when calling personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdPatch');
            }



            // verify required parameter 'phoneNumberTypeId' is set
            if (!phoneNumberTypeId) {
                throw new Error('Missing required parameter phoneNumberTypeId when calling personPhonesBusinessEntityIdPhoneNumberPhoneNumberTypeIdPatch');
            }








            let httpRequestParams: any = {
                method: 'PATCH',
                url: path,
                json: true,
                data: personPhone,
                
                
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

