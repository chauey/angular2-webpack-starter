/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */
import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs';
//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface



import { ContactType } from './ContactType'



import { Error } from './Error'




//namespace API.Client {
    'use strict';


    export class ContactTypesApi {
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
         * Get EntitySet ContactTypes
         * Returns the EntitySet ContactTypes
         * @param $Expand Expand navigation property
         * @param $Filter filter property
         * @param $Select select structural property
         * @param $Orderby order by some property
         * @param $Top top elements
         * @param $Skip skip elements
         * @param $Count include count in response
         */
        public contactTypesGet ($Expand?: string, $Filter?: string, $Select?: string, $Orderby?: string, $Top?: number, $Skip?: number, $Count?: boolean, extraHttpRequestParams?: any ) : Rx.Observable<ContactType> {
            const path = this.basePath + '/ContactTypes';

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
         * Post a new entity to EntitySet ContactTypes
         * Post a new entity to EntitySet ContactTypes
         * @param contactType The entity to post
         */
        public contactTypesPost (contactType?: ContactType, extraHttpRequestParams?: any ) : Rx.Observable<ContactType> {
            const path = this.basePath + '/ContactTypes';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);








            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: contactType,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http.request(httpRequestParams);
        }

        /**
         * Get entity from ContactTypes by key.
         * Returns the entity with the key from ContactTypes
         * @param contactTypeId key: ContactTypeId
         * @param $Select description
         */
        public contactTypesContactTypeIdGet (contactTypeId: number, $Select?: string, extraHttpRequestParams?: any ) : Rx.Observable<ContactType> {
            const path = this.basePath + '/ContactTypes({ContactTypeId})'
                .replace('{' + 'ContactTypeId' + '}', String(contactTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'contactTypeId' is set
            if (!contactTypeId) {
                throw new Error('Missing required parameter contactTypeId when calling contactTypesContactTypeIdGet');
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
         * Delete entity in EntitySet ContactTypes
         * Delete entity in EntitySet ContactTypes
         * @param contactTypeId key: ContactTypeId
         * @param ifMatch If-Match header
         */
        public contactTypesContactTypeIdDelete (contactTypeId: number, ifMatch?: string, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/ContactTypes({ContactTypeId})'
                .replace('{' + 'ContactTypeId' + '}', String(contactTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'contactTypeId' is set
            if (!contactTypeId) {
                throw new Error('Missing required parameter contactTypeId when calling contactTypesContactTypeIdDelete');
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
         * Update entity in EntitySet ContactTypes
         * Update entity in EntitySet ContactTypes
         * @param contactTypeId key: ContactTypeId
         * @param contactType The entity to patch
         */
        public contactTypesContactTypeIdPatch (contactTypeId: number, contactType?: ContactType, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/ContactTypes({ContactTypeId})'
                .replace('{' + 'ContactTypeId' + '}', String(contactTypeId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'contactTypeId' is set
            if (!contactTypeId) {
                throw new Error('Missing required parameter contactTypeId when calling contactTypesContactTypeIdPatch');
            }








            let httpRequestParams: any = {
                method: 'PATCH',
                url: path,
                json: true,
                data: contactType,
                
                
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

