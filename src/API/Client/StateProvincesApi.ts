/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */
import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs';
//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface





import { StateProvince } from './StateProvince'

import { Error } from './Error'




//namespace API.Client {
    'use strict';


    export class StateProvincesApi {
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
         * Get EntitySet StateProvinces
         * Returns the EntitySet StateProvinces
         * @param $Expand Expand navigation property
         * @param $Filter filter property
         * @param $Select select structural property
         * @param $Orderby order by some property
         * @param $Top top elements
         * @param $Skip skip elements
         * @param $Count include count in response
         */
        public stateProvincesGet ($Expand?: string, $Filter?: string, $Select?: string, $Orderby?: string, $Top?: number, $Skip?: number, $Count?: boolean, extraHttpRequestParams?: any ) : Rx.Observable<StateProvince> {
            const path = this.basePath + '/StateProvinces';

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
         * Post a new entity to EntitySet StateProvinces
         * Post a new entity to EntitySet StateProvinces
         * @param stateProvince The entity to post
         */
        public stateProvincesPost (stateProvince?: StateProvince, extraHttpRequestParams?: any ) : Rx.Observable<StateProvince> {
            const path = this.basePath + '/StateProvinces';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);








            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: stateProvince,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http.request(httpRequestParams);
        }

        /**
         * Get entity from StateProvinces by key.
         * Returns the entity with the key from StateProvinces
         * @param stateProvinceId key: StateProvinceId
         * @param $Select description
         */
        public stateProvincesStateProvinceIdGet (stateProvinceId: number, $Select?: string, extraHttpRequestParams?: any ) : Rx.Observable<StateProvince> {
            const path = this.basePath + '/StateProvinces({StateProvinceId})'
                .replace('{' + 'StateProvinceId' + '}', String(stateProvinceId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'stateProvinceId' is set
            if (!stateProvinceId) {
                throw new Error('Missing required parameter stateProvinceId when calling stateProvincesStateProvinceIdGet');
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
         * Delete entity in EntitySet StateProvinces
         * Delete entity in EntitySet StateProvinces
         * @param stateProvinceId key: StateProvinceId
         * @param ifMatch If-Match header
         */
        public stateProvincesStateProvinceIdDelete (stateProvinceId: number, ifMatch?: string, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/StateProvinces({StateProvinceId})'
                .replace('{' + 'StateProvinceId' + '}', String(stateProvinceId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'stateProvinceId' is set
            if (!stateProvinceId) {
                throw new Error('Missing required parameter stateProvinceId when calling stateProvincesStateProvinceIdDelete');
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
         * Update entity in EntitySet StateProvinces
         * Update entity in EntitySet StateProvinces
         * @param stateProvinceId key: StateProvinceId
         * @param stateProvince The entity to patch
         */
        public stateProvincesStateProvinceIdPatch (stateProvinceId: number, stateProvince?: StateProvince, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/StateProvinces({StateProvinceId})'
                .replace('{' + 'StateProvinceId' + '}', String(stateProvinceId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'stateProvinceId' is set
            if (!stateProvinceId) {
                throw new Error('Missing required parameter stateProvinceId when calling stateProvincesStateProvinceIdPatch');
            }








            let httpRequestParams: any = {
                method: 'PATCH',
                url: path,
                json: true,
                data: stateProvince,
                
                
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
