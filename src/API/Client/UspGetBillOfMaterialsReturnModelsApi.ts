/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */
import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs';
//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface





import { Error } from './Error'

import { UspGetBillOfMaterialsReturnModel } from './UspGetBillOfMaterialsReturnModel'




//namespace API.Client {
    'use strict';


    export class UspGetBillOfMaterialsReturnModelsApi {
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
         * Get EntitySet UspGetBillOfMaterialsReturnModels
         * Returns the EntitySet UspGetBillOfMaterialsReturnModels
         * @param $Expand Expand navigation property
         * @param $Filter filter property
         * @param $Select select structural property
         * @param $Orderby order by some property
         * @param $Top top elements
         * @param $Skip skip elements
         * @param $Count include count in response
         */
        public uspGetBillOfMaterialsReturnModelsGet ($Expand?: string, $Filter?: string, $Select?: string, $Orderby?: string, $Top?: number, $Skip?: number, $Count?: boolean, extraHttpRequestParams?: any ) : Rx.Observable<UspGetBillOfMaterialsReturnModel> {
            const path = this.basePath + '/UspGetBillOfMaterialsReturnModels';

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
         * Post a new entity to EntitySet UspGetBillOfMaterialsReturnModels
         * Post a new entity to EntitySet UspGetBillOfMaterialsReturnModels
         * @param uspGetBillOfMaterialsReturnModel The entity to post
         */
        public uspGetBillOfMaterialsReturnModelsPost (uspGetBillOfMaterialsReturnModel?: UspGetBillOfMaterialsReturnModel, extraHttpRequestParams?: any ) : Rx.Observable<UspGetBillOfMaterialsReturnModel> {
            const path = this.basePath + '/UspGetBillOfMaterialsReturnModels';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);








            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: uspGetBillOfMaterialsReturnModel,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http.request(httpRequestParams);
        }

        /**
         * Get entity from UspGetBillOfMaterialsReturnModels by key.
         * Returns the entity with the key from UspGetBillOfMaterialsReturnModels
         * @param componentID key: ComponentID
         * @param productAssemblyID key: ProductAssemblyID
         * @param $Select description
         */
        public uspGetBillOfMaterialsReturnModelsComponentIDProductAssemblyIDGet (componentID: number, productAssemblyID: number, $Select?: string, extraHttpRequestParams?: any ) : Rx.Observable<UspGetBillOfMaterialsReturnModel> {
            const path = this.basePath + '/UspGetBillOfMaterialsReturnModels({ComponentID}, {ProductAssemblyID})'
                .replace('{' + 'ComponentID' + '}', String(componentID))
                .replace('{' + 'ProductAssemblyID' + '}', String(productAssemblyID));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'componentID' is set
            if (!componentID) {
                throw new Error('Missing required parameter componentID when calling uspGetBillOfMaterialsReturnModelsComponentIDProductAssemblyIDGet');
            }



            // verify required parameter 'productAssemblyID' is set
            if (!productAssemblyID) {
                throw new Error('Missing required parameter productAssemblyID when calling uspGetBillOfMaterialsReturnModelsComponentIDProductAssemblyIDGet');
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
         * Delete entity in EntitySet UspGetBillOfMaterialsReturnModels
         * Delete entity in EntitySet UspGetBillOfMaterialsReturnModels
         * @param componentID key: ComponentID
         * @param productAssemblyID key: ProductAssemblyID
         * @param ifMatch If-Match header
         */
        public uspGetBillOfMaterialsReturnModelsComponentIDProductAssemblyIDDelete (componentID: number, productAssemblyID: number, ifMatch?: string, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/UspGetBillOfMaterialsReturnModels({ComponentID}, {ProductAssemblyID})'
                .replace('{' + 'ComponentID' + '}', String(componentID))
                .replace('{' + 'ProductAssemblyID' + '}', String(productAssemblyID));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'componentID' is set
            if (!componentID) {
                throw new Error('Missing required parameter componentID when calling uspGetBillOfMaterialsReturnModelsComponentIDProductAssemblyIDDelete');
            }



            // verify required parameter 'productAssemblyID' is set
            if (!productAssemblyID) {
                throw new Error('Missing required parameter productAssemblyID when calling uspGetBillOfMaterialsReturnModelsComponentIDProductAssemblyIDDelete');
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
         * Update entity in EntitySet UspGetBillOfMaterialsReturnModels
         * Update entity in EntitySet UspGetBillOfMaterialsReturnModels
         * @param componentID key: ComponentID
         * @param productAssemblyID key: ProductAssemblyID
         * @param uspGetBillOfMaterialsReturnModel The entity to patch
         */
        public uspGetBillOfMaterialsReturnModelsComponentIDProductAssemblyIDPatch (componentID: number, productAssemblyID: number, uspGetBillOfMaterialsReturnModel?: UspGetBillOfMaterialsReturnModel, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/UspGetBillOfMaterialsReturnModels({ComponentID}, {ProductAssemblyID})'
                .replace('{' + 'ComponentID' + '}', String(componentID))
                .replace('{' + 'ProductAssemblyID' + '}', String(productAssemblyID));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'componentID' is set
            if (!componentID) {
                throw new Error('Missing required parameter componentID when calling uspGetBillOfMaterialsReturnModelsComponentIDProductAssemblyIDPatch');
            }



            // verify required parameter 'productAssemblyID' is set
            if (!productAssemblyID) {
                throw new Error('Missing required parameter productAssemblyID when calling uspGetBillOfMaterialsReturnModelsComponentIDProductAssemblyIDPatch');
            }








            let httpRequestParams: any = {
                method: 'PATCH',
                url: path,
                json: true,
                data: uspGetBillOfMaterialsReturnModel,
                
                
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

