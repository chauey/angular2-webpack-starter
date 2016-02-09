/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */
import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs';
//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface





import { CountryRegion } from './CountryRegion'

import { Error } from './Error'




//namespace API.Client {
    'use strict';


    export class CountryRegionsApi {
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
         * Get EntitySet CountryRegions
         * Returns the EntitySet CountryRegions
         * @param $Expand Expand navigation property
         * @param $Filter filter property
         * @param $Select select structural property
         * @param $Orderby order by some property
         * @param $Top top elements
         * @param $Skip skip elements
         * @param $Count include count in response
         */
        public countryRegionsGet ($Expand?: string, $Filter?: string, $Select?: string, $Orderby?: string, $Top?: number, $Skip?: number, $Count?: boolean, extraHttpRequestParams?: any ) : Rx.Observable<CountryRegion> {
            const path = this.basePath + '/CountryRegions';

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
         * Post a new entity to EntitySet CountryRegions
         * Post a new entity to EntitySet CountryRegions
         * @param countryRegion The entity to post
         */
        public countryRegionsPost (countryRegion?: CountryRegion, extraHttpRequestParams?: any ) : Rx.Observable<CountryRegion> {
            const path = this.basePath + '/CountryRegions';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);








            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: countryRegion,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http.request(httpRequestParams);
        }

        /**
         * Get entity from CountryRegions by key.
         * Returns the entity with the key from CountryRegions
         * @param countryRegionCode key: CountryRegionCode
         * @param $Select description
         */
        public countryRegionsCountryRegionCodeGet (countryRegionCode: string, $Select?: string, extraHttpRequestParams?: any ) : Rx.Observable<CountryRegion> {
            const path = this.basePath + '/CountryRegions(&#39;{CountryRegionCode}&#39;)'
                .replace('{' + 'CountryRegionCode' + '}', String(countryRegionCode));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'countryRegionCode' is set
            if (!countryRegionCode) {
                throw new Error('Missing required parameter countryRegionCode when calling countryRegionsCountryRegionCodeGet');
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
         * Delete entity in EntitySet CountryRegions
         * Delete entity in EntitySet CountryRegions
         * @param countryRegionCode key: CountryRegionCode
         * @param ifMatch If-Match header
         */
        public countryRegionsCountryRegionCodeDelete (countryRegionCode: string, ifMatch?: string, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/CountryRegions(&#39;{CountryRegionCode}&#39;)'
                .replace('{' + 'CountryRegionCode' + '}', String(countryRegionCode));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'countryRegionCode' is set
            if (!countryRegionCode) {
                throw new Error('Missing required parameter countryRegionCode when calling countryRegionsCountryRegionCodeDelete');
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
         * Update entity in EntitySet CountryRegions
         * Update entity in EntitySet CountryRegions
         * @param countryRegionCode key: CountryRegionCode
         * @param countryRegion The entity to patch
         */
        public countryRegionsCountryRegionCodePatch (countryRegionCode: string, countryRegion?: CountryRegion, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/CountryRegions(&#39;{CountryRegionCode}&#39;)'
                .replace('{' + 'CountryRegionCode' + '}', String(countryRegionCode));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'countryRegionCode' is set
            if (!countryRegionCode) {
                throw new Error('Missing required parameter countryRegionCode when calling countryRegionsCountryRegionCodePatch');
            }








            let httpRequestParams: any = {
                method: 'PATCH',
                url: path,
                json: true,
                data: countryRegion,
                
                
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

