// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */
import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs';
//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface





import { Error } from './Error'

import { AwBuildVersion } from './AwBuildVersion'




//namespace API.Client {
    'use strict';


    export class AwBuildVersionsApi {
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
         * Get EntitySet AwBuildVersions
         * Returns the EntitySet AwBuildVersions
         * @param $Expand Expand navigation property
         * @param $Filter filter property
         * @param $Select select structural property
         * @param $Orderby order by some property
         * @param $Top top elements
         * @param $Skip skip elements
         * @param $Count include count in response
         */
        public awBuildVersionsGet ($Expand?: string, $Filter?: string, $Select?: string, $Orderby?: string, $Top?: number, $Skip?: number, $Count?: boolean, extraHttpRequestParams?: any ) : Rx.Observable<AwBuildVersion> {
            const path = this.basePath + '/AwBuildVersions';

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
         * Post a new entity to EntitySet AwBuildVersions
         * Post a new entity to EntitySet AwBuildVersions
         * @param awBuildVersion The entity to post
         */
        public awBuildVersionsPost (awBuildVersion?: AwBuildVersion, extraHttpRequestParams?: any ) : Rx.Observable<AwBuildVersion> {
            const path = this.basePath + '/AwBuildVersions';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);








            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: awBuildVersion,

                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http.request(httpRequestParams);
        }

        /**
         * Get entity from AwBuildVersions by key.
         * Returns the entity with the key from AwBuildVersions
         * @param systemInformationId key: SystemInformationId
         * @param $Select description
         */
        public awBuildVersionsSystemInformationIdGet (systemInformationId: string, $Select?: string, extraHttpRequestParams?: any ) : Rx.Observable<AwBuildVersion> {
            const path = this.basePath + '/AwBuildVersions({SystemInformationId})'
                .replace('{' + 'SystemInformationId' + '}', String(systemInformationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'systemInformationId' is set
            if (!systemInformationId) {
                throw new Error('Missing required parameter systemInformationId when calling awBuildVersionsSystemInformationIdGet');
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
         * Delete entity in EntitySet AwBuildVersions
         * Delete entity in EntitySet AwBuildVersions
         * @param systemInformationId key: SystemInformationId
         * @param ifMatch If-Match header
         */
        public awBuildVersionsSystemInformationIdDelete (systemInformationId: string, ifMatch?: string, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/AwBuildVersions({SystemInformationId})'
                .replace('{' + 'SystemInformationId' + '}', String(systemInformationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'systemInformationId' is set
            if (!systemInformationId) {
                throw new Error('Missing required parameter systemInformationId when calling awBuildVersionsSystemInformationIdDelete');
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
         * Update entity in EntitySet AwBuildVersions
         * Update entity in EntitySet AwBuildVersions
         * @param systemInformationId key: SystemInformationId
         * @param awBuildVersion The entity to patch
         */
        public awBuildVersionsSystemInformationIdPatch (systemInformationId: string, awBuildVersion?: AwBuildVersion, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/AwBuildVersions({SystemInformationId})'
                .replace('{' + 'SystemInformationId' + '}', String(systemInformationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'systemInformationId' is set
            if (!systemInformationId) {
                throw new Error('Missing required parameter systemInformationId when calling awBuildVersionsSystemInformationIdPatch');
            }








            let httpRequestParams: any = {
                method: 'PATCH',
                url: path,
                json: true,
                data: awBuildVersion,
                
                
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

