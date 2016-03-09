// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */
import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs';
//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface



import { BusinessEntityContact } from './BusinessEntityContact'

import { Error } from './Error'




//namespace API.Client {
    'use strict';


    export class BusinessEntityContactsApi {
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
         * Get EntitySet BusinessEntityContacts
         * Returns the EntitySet BusinessEntityContacts
         * @param $Expand Expand navigation property
         * @param $Filter filter property
         * @param $Select select structural property
         * @param $Orderby order by some property
         * @param $Top top elements
         * @param $Skip skip elements
         * @param $Count include count in response
         */
        public businessEntityContactsGet ($Expand?: string, $Filter?: string, $Select?: string, $Orderby?: string, $Top?: number, $Skip?: number, $Count?: boolean, extraHttpRequestParams?: any ) : Rx.Observable<BusinessEntityContact> {
            const path = this.basePath + '/BusinessEntityContacts';

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
         * Post a new entity to EntitySet BusinessEntityContacts
         * Post a new entity to EntitySet BusinessEntityContacts
         * @param businessEntityContact The entity to post
         */
        public businessEntityContactsPost (businessEntityContact?: BusinessEntityContact, extraHttpRequestParams?: any ) : Rx.Observable<BusinessEntityContact> {
            const path = this.basePath + '/BusinessEntityContacts';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);








            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: businessEntityContact,


                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http.request(httpRequestParams);
        }

        /**
         * Get entity from BusinessEntityContacts by key.
         * Returns the entity with the key from BusinessEntityContacts
         * @param businessEntityId key: BusinessEntityId
         * @param personId key: PersonId
         * @param contactTypeId key: ContactTypeId
         * @param $Select description
         */
        public businessEntityContactsBusinessEntityIdPersonIdContactTypeIdGet (businessEntityId: number, personId: number, contactTypeId: number, $Select?: string, extraHttpRequestParams?: any ) : Rx.Observable<BusinessEntityContact> {
            const path = this.basePath + '/BusinessEntityContacts({BusinessEntityId}, {PersonId}, {ContactTypeId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'PersonId' + '}', String(personId))
                .replace('{' + 'ContactTypeId' + '}', String(contactTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling businessEntityContactsBusinessEntityIdPersonIdContactTypeIdGet');
            }



            // verify required parameter 'personId' is set
            if (!personId) {
                throw new Error('Missing required parameter personId when calling businessEntityContactsBusinessEntityIdPersonIdContactTypeIdGet');
            }



            // verify required parameter 'contactTypeId' is set
            if (!contactTypeId) {
                throw new Error('Missing required parameter contactTypeId when calling businessEntityContactsBusinessEntityIdPersonIdContactTypeIdGet');
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
         * Delete entity in EntitySet BusinessEntityContacts
         * Delete entity in EntitySet BusinessEntityContacts
         * @param businessEntityId key: BusinessEntityId
         * @param personId key: PersonId
         * @param contactTypeId key: ContactTypeId
         * @param ifMatch If-Match header
         */
        public businessEntityContactsBusinessEntityIdPersonIdContactTypeIdDelete (businessEntityId: number, personId: number, contactTypeId: number, ifMatch?: string, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/BusinessEntityContacts({BusinessEntityId}, {PersonId}, {ContactTypeId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'PersonId' + '}', String(personId))
                .replace('{' + 'ContactTypeId' + '}', String(contactTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling businessEntityContactsBusinessEntityIdPersonIdContactTypeIdDelete');
            }



            // verify required parameter 'personId' is set
            if (!personId) {
                throw new Error('Missing required parameter personId when calling businessEntityContactsBusinessEntityIdPersonIdContactTypeIdDelete');
            }



            // verify required parameter 'contactTypeId' is set
            if (!contactTypeId) {
                throw new Error('Missing required parameter contactTypeId when calling businessEntityContactsBusinessEntityIdPersonIdContactTypeIdDelete');
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
         * Update entity in EntitySet BusinessEntityContacts
         * Update entity in EntitySet BusinessEntityContacts
         * @param businessEntityId key: BusinessEntityId
         * @param personId key: PersonId
         * @param contactTypeId key: ContactTypeId
         * @param businessEntityContact The entity to patch
         */
        public businessEntityContactsBusinessEntityIdPersonIdContactTypeIdPatch (businessEntityId: number, personId: number, contactTypeId: number, businessEntityContact?: BusinessEntityContact, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/BusinessEntityContacts({BusinessEntityId}, {PersonId}, {ContactTypeId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'PersonId' + '}', String(personId))
                .replace('{' + 'ContactTypeId' + '}', String(contactTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling businessEntityContactsBusinessEntityIdPersonIdContactTypeIdPatch');
            }



            // verify required parameter 'personId' is set
            if (!personId) {
                throw new Error('Missing required parameter personId when calling businessEntityContactsBusinessEntityIdPersonIdContactTypeIdPatch');
            }



            // verify required parameter 'contactTypeId' is set
            if (!contactTypeId) {
                throw new Error('Missing required parameter contactTypeId when calling businessEntityContactsBusinessEntityIdPersonIdContactTypeIdPatch');
            }








            let httpRequestParams: any = {
                method: 'PATCH',
                url: path,
                json: true,
                data: businessEntityContact,


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

