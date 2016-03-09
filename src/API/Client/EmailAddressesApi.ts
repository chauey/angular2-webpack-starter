// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */
import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import Rx from 'rxjs/Rx';
//import * as Rx from '@reactivex/rxjs';
//import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs';
//http://stackoverflow.com/questions/30712638/typescript-export-imported-interface





import { Error } from './Error'

import { EmailAddress } from './EmailAddress'




//namespace API.Client {
    'use strict';


    export class EmailAddressesApi {
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
         * Get EntitySet EmailAddresses
         * Returns the EntitySet EmailAddresses
         * @param $Expand Expand navigation property
         * @param $Filter filter property
         * @param $Select select structural property
         * @param $Orderby order by some property
         * @param $Top top elements
         * @param $Skip skip elements
         * @param $Count include count in response
         */
        public emailAddressesGet ($Expand?: string, $Filter?: string, $Select?: string, $Orderby?: string, $Top?: number, $Skip?: number, $Count?: boolean, extraHttpRequestParams?: any ) : Rx.Observable<EmailAddress> {
            const path = this.basePath + '/EmailAddresses';

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
         * Post a new entity to EntitySet EmailAddresses
         * Post a new entity to EntitySet EmailAddresses
         * @param emailAddress The entity to post
         */
        public emailAddressesPost (emailAddress?: EmailAddress, extraHttpRequestParams?: any ) : Rx.Observable<EmailAddress> {
            const path = this.basePath + '/EmailAddresses';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);








            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: emailAddress,


                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http.request(httpRequestParams);
        }

        /**
         * Get entity from EmailAddresses by key.
         * Returns the entity with the key from EmailAddresses
         * @param businessEntityId key: BusinessEntityId
         * @param emailAddressId key: EmailAddressId
         * @param $Select description
         */
        public emailAddressesBusinessEntityIdEmailAddressIdGet (businessEntityId: number, emailAddressId: number, $Select?: string, extraHttpRequestParams?: any ) : Rx.Observable<EmailAddress> {
            const path = this.basePath + '/EmailAddresses({BusinessEntityId}, {EmailAddressId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'EmailAddressId' + '}', String(emailAddressId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling emailAddressesBusinessEntityIdEmailAddressIdGet');
            }



            // verify required parameter 'emailAddressId' is set
            if (!emailAddressId) {
                throw new Error('Missing required parameter emailAddressId when calling emailAddressesBusinessEntityIdEmailAddressIdGet');
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
         * Delete entity in EntitySet EmailAddresses
         * Delete entity in EntitySet EmailAddresses
         * @param businessEntityId key: BusinessEntityId
         * @param emailAddressId key: EmailAddressId
         * @param ifMatch If-Match header
         */
        public emailAddressesBusinessEntityIdEmailAddressIdDelete (businessEntityId: number, emailAddressId: number, ifMatch?: string, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/EmailAddresses({BusinessEntityId}, {EmailAddressId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'EmailAddressId' + '}', String(emailAddressId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling emailAddressesBusinessEntityIdEmailAddressIdDelete');
            }



            // verify required parameter 'emailAddressId' is set
            if (!emailAddressId) {
                throw new Error('Missing required parameter emailAddressId when calling emailAddressesBusinessEntityIdEmailAddressIdDelete');
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
         * Update entity in EntitySet EmailAddresses
         * Update entity in EntitySet EmailAddresses
         * @param businessEntityId key: BusinessEntityId
         * @param emailAddressId key: EmailAddressId
         * @param emailAddress The entity to patch
         */
        public emailAddressesBusinessEntityIdEmailAddressIdPatch (businessEntityId: number, emailAddressId: number, emailAddress?: EmailAddress, extraHttpRequestParams?: any ) : Rx.Observable<{}> {
            const path = this.basePath + '/EmailAddresses({BusinessEntityId}, {EmailAddressId})'
                .replace('{' + 'BusinessEntityId' + '}', String(businessEntityId))
                .replace('{' + 'EmailAddressId' + '}', String(emailAddressId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'businessEntityId' is set
            if (!businessEntityId) {
                throw new Error('Missing required parameter businessEntityId when calling emailAddressesBusinessEntityIdEmailAddressIdPatch');
            }



            // verify required parameter 'emailAddressId' is set
            if (!emailAddressId) {
                throw new Error('Missing required parameter emailAddressId when calling emailAddressesBusinessEntityIdEmailAddressIdPatch');
            }








            let httpRequestParams: any = {
                method: 'PATCH',
                url: path,
                json: true,
                data: emailAddress,


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

