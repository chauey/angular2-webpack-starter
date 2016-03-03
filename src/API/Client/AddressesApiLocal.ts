/// <reference path="api.d.ts" />

// /* tslint:disable:no-unused-variable member-ordering */
// import {Http, HTTP_PROVIDERS, RequestOptions, Headers, Response, Request, RequestOptionsArgs, RequestMethod, URLSearchParams} from 'angular2/http';
// //import Rx from 'rxjs/Rx';
// //import * as Rx from '@reactivex/rxjs';
// //import {Observable} from 'rxjs/Observable';
// import * as Rx from 'rxjs'; // rxjs/add/operator/map

// //http://stackoverflow.com/questions/30712638/typescript-export-imported-interface

// import { Address } from './Address'

// import { Error } from './Error'

// import { Injectable } from 'angular2/core';

import { IAddressesApi } from './IAddressesApi'

//namespace API.Client {
'use strict';

@Injectable()
export class AddressesApiLocal implements IAddressesApi {
//   protected basePath = 'http://localhost:2000/odata';
//   public defaultHeaders: Headers = new Headers({});//any = {};

//   static $inject: string[] = ['$http', '$httpParamSerializer'];

  constructor() { //, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
    // if (basePath) {
    //     this.basePath = basePath;
    // }
  }

  /**
   * Get EntitySet Addresses
   * Returns the EntitySet Addresses
   * @param $Expand Expand navigation property
   * @param $Filter filter property
   * @param $Select select structural property
   * @param $Orderby order by some property
   * @param $Top top elements
   * @param $Skip skip elements
   * @param $Count include count in response
   */
  public addressesGet(odata?: any//$Expand?: string, $Filter?: string, $Select?: string, $Orderby?: string, $Top?: number, $Skip?: number, $Count?: boolean
    , extraHttpRequestParams?: any): Rx.Observable<{ count: number, list: Address[] }> {
    
    
    // Get the list of 31 hard-code Addresses
    let addresses = this.get();

    // Then filtering/sorting/paging    
    if (odata.filter !== undefined) {
      //urlSearchParams.append('$filter', odata.filter.toString());
      addresses = this.filter(addresses, odata.filter.toString());
    }

    if (odata.orderby !== undefined) {
      //urlSearchParams.append('$orderby', odata.orderby.toString());
      addresses = this.sort(addresses, odata.orderby.toString());
    }

    if (odata.select !== undefined || odata.top !== undefined || odata.skip !== undefined) {
      //urlSearchParams.append('$select', odata.select.toString());
      addresses = this.paging(addresses, odata.select, odata.top, odata.skip);
    }
    
    // Return result
    return addresses;
  }
  
  private sort(addresses, orderby) {
    addresses.sort((orderby) => {
        return (a,b) => {
            if (a[orderby] < b[orderby])
                return -1;
            if (a[orderby] > b[orderby])
                return 1;
            return 0;
        };
    });
  }
  
  private filter(addresses, keyword) {
      return address.filter((value) => {
          return (address.addressLine1.indexOf(keyword) >= 0 || address.addressLine2.indexOf(keyword) >= 0 || address.city.indexOf(keyword) >= 0 || 
              address.postalCode.indexOf(keyword) >= 0 || address.spatialLocation.indexOf(keyword) >= 0);
      }));
  }
  
  private paging(addresses, odataSelect, odataTop, odataSkip) {
      let select = odataSelect ? odataSelect.toString() : '';
      let top = odataTop ? odataTop.toString() : '';
      let skip = odataSkip ? odataSkip.toString() : '';
      
      // UNDONE: paging
      
      return addresses;
  }
  
  private get() {
      return [{
        "AddressId": 1,
        "AddressLine1": "1970 Napa Ct.",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.164644615406 47.7869921906598)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "9aadcb0d-36cf-483f-84d8-585c2d4ec6e9",
        "ModifiedDate": "2007-12-04T00:00:00+07:00"
        },
        {
        "AddressId": 2,
        "AddressLine1": "9833 Mt. Dias Blv.",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.250185528911 47.6867097047995)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "32a54b9e-e034-4bfb-b573-a71cde60d8c0",
        "ModifiedDate": "2008-11-30T00:00:00+07:00"
        },
        {
        "AddressId": 3,
        "AddressLine1": "7484 Roundtree Drive",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.274625789912 47.7631154083121)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "4c506923-6d1b-452c-a07c-baa6f5b142a4",
        "ModifiedDate": "2013-03-07T00:00:00+07:00"
        },
        {
        "AddressId": 4,
        "AddressLine1": "9539 Glenside Dr",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.335726442416 47.7392386259644)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "e5946c78-4bcc-477f-9fa1-cc09de16a880",
        "ModifiedDate": "2009-02-03T00:00:00+07:00"
        },
        {
        "AddressId": 5,
        "AddressLine1": "1226 Shoe St.",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.091323832402 47.7010357742081)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "fbaff937-4a97-4af0-81fd-b849900e9bb0",
        "ModifiedDate": "2008-12-19T00:00:00+07:00"
        },
        {
        "AddressId": 6,
        "AddressLine1": "1399 Firestone Drive",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.360166703417 47.7058111306776)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "febf8191-9804-44c8-877a-33fde94f0075",
        "ModifiedDate": "2009-02-13T00:00:00+07:00"
        },
        {
        "AddressId": 7,
        "AddressLine1": "5672 Hale Dr.",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.335726442416 47.7631154083121)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "0175a174-6c34-4d41-b3c1-4419cd6a0446",
        "ModifiedDate": "2009-12-11T00:00:00+07:00"
        },
        {
        "AddressId": 8,
        "AddressLine1": "6387 Scenic Avenue",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.372386833918 47.7440139824339)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "3715e813-4dca-49e0-8f1c-31857d21f269",
        "ModifiedDate": "2008-12-17T00:00:00+07:00"
        },
        {
        "AddressId": 9,
        "AddressLine1": "8713 Yosemite Ct.",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.189084876407 47.7201372000862)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "268af621-76d7-4c78-9441-144fd139821a",
        "ModifiedDate": "2012-05-30T00:00:00+07:00"
        },
        {
        "AddressId": 10,
        "AddressLine1": "250 Race Court",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.042443310399 47.7822168341902)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "0b6b739d-8eb6-4378-8d55-fe196af34c04",
        "ModifiedDate": "2008-12-02T00:00:00+07:00"
        },
        {
        "AddressId": 11,
        "AddressLine1": "1318 Lasalle Street",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.225745267909 47.8251950424161)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "981b3303-aca2-49c7-9a96-fb670785b269",
        "ModifiedDate": "2013-02-28T00:00:00+07:00"
        },
        {
        "AddressId": 12,
        "AddressLine1": "5415 San Gabriel Dr.",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.335726442416 47.7201372000862)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "1c2c9cfe-ab9f-4f96-8e1f-d9666b6f7f22",
        "ModifiedDate": "2013-01-05T00:00:00+07:00"
        },
        {
        "AddressId": 13,
        "AddressLine1": "9265 La Paz",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.0546634409 47.815644329477)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "e0ba2f52-c907-4553-a0db-67fc67d28ae4",
        "ModifiedDate": "2013-12-14T00:00:00+07:00"
        },
        {
        "AddressId": 14,
        "AddressLine1": "8157 W. Book",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.164644615406 47.7822168341902)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "a1c658ae-c553-4a9d-a081-a550d39b64df",
        "ModifiedDate": "2009-12-04T00:00:00+07:00"
        },
        {
        "AddressId": 15,
        "AddressLine1": "4912 La Vuelta",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.323506311915 47.7822168341902)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "f397e64a-a9d8-4e57-9e7c-b10928acadd6",
        "ModifiedDate": "2013-11-18T00:00:00+07:00"
        },
        {
        "AddressId": 16,
        "AddressLine1": "40 Ellis St.",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.164644615406 47.7249125565558)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "0312b65f-cb60-4396-9ec7-a78b2eac1a1b",
        "ModifiedDate": "2012-11-09T00:00:00+07:00"
        },
        {
        "AddressId": 17,
        "AddressLine1": "6696 Anchor Drive",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.250185528911 47.7344632694949)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "ce9b3b47-9267-4727-bcd2-687c47482c06",
        "ModifiedDate": "2013-11-08T00:00:00+07:00"
        },
        {
        "AddressId": 18,
        "AddressLine1": "1873 Lion Circle",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.0668835714 47.7822168341902)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "963854f7-e3cb-46a1-a3db-1b05f71d6473",
        "ModifiedDate": "2013-11-30T00:00:00+07:00"
        },
        {
        "AddressId": 19,
        "AddressLine1": "3148 Rose Street",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.347946572916 47.7392386259644)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "6b7acb0f-cdbf-44fd-ba14-eb08a56c1582",
        "ModifiedDate": "2014-04-03T00:00:00+07:00"
        },
        {
        "AddressId": 20,
        "AddressLine1": "6872 Thornwood Dr.",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.140204354405 47.7344632694949)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "4b1f1ed4-97a4-43fd-bb1e-9e05817718e8",
        "ModifiedDate": "2009-02-05T00:00:00+07:00"
        },
        {
        "AddressId": 21,
        "AddressLine1": "5747 Shirley Drive",
        "AddressLine2": null,
        "City": "Bothell",
        "StateProvinceId": 79,
        "PostalCode": "98011",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.030223179898 47.7153618436167)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "d83299d7-a0f4-4055-9bd5-5908e245d757",
        "ModifiedDate": "2009-02-11T00:00:00+07:00"
        },
        {
        "AddressId": 22,
        "AddressLine1": "636 Vine Hill Way",
        "AddressLine2": null,
        "City": "Portland",
        "StateProvinceId": 58,
        "PostalCode": "97205",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.6223011785 45.5241741562999)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "7f641525-2704-4f73-9d8a-eb062cfbfa3c",
        "ModifiedDate": "2011-05-24T00:00:00+07:00"
        },
        {
        "AddressId": 23,
        "AddressLine1": "6657 Sand Pointe Lane",
        "AddressLine2": null,
        "City": "Seattle",
        "StateProvinceId": 79,
        "PostalCode": "98104",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.373607213 47.7295638308999)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "b991568f-5096-4a92-b25c-1a3e4d2acc66",
        "ModifiedDate": "2009-01-15T00:00:00+07:00"
        },
        {
        "AddressId": 24,
        "AddressLine1": "80 Sunview Terrace",
        "AddressLine2": null,
        "City": "Duluth",
        "StateProvinceId": 36,
        "PostalCode": "55802",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-92.0734750944588 46.8033901799154)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "be07d3c8-6e58-4670-9da9-151ab6d3d620",
        "ModifiedDate": "2011-05-24T00:00:00+07:00"
        },
        {
        "AddressId": 25,
        "AddressLine1": "9178 Jumping St.",
        "AddressLine2": null,
        "City": "Dallas",
        "StateProvinceId": 73,
        "PostalCode": "75201",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-96.7718703803229 32.7698003131228)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "c8df3bd9-48f0-4654-a8dd-14a67a84d3c6",
        "ModifiedDate": "2012-07-31T00:00:00+07:00"
        },
        {
        "AddressId": 26,
        "AddressLine1": "5725 Glaze Drive",
        "AddressLine2": null,
        "City": "San Francisco",
        "StateProvinceId": 9,
        "PostalCode": "94109",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-122.408489591016 37.7605893030868)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "77415959-a4ee-4da6-86f9-70c097560005",
        "ModifiedDate": "2011-05-24T00:00:00+07:00"
        },
        {
        "AddressId": 27,
        "AddressLine1": "2487 Riverside Drive",
        "AddressLine2": null,
        "City": "Nevada",
        "StateProvinceId": 74,
        "PostalCode": "84407",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-111.911600969772 41.252325627917)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "c1d0f3b0-6b2a-4388-8861-48f44d8270a1",
        "ModifiedDate": "2011-05-24T00:00:00+07:00"
        },
        {
        "AddressId": 28,
        "AddressLine1": "9228 Via Del Sol",
        "AddressLine2": null,
        "City": "Phoenix",
        "StateProvinceId": 6,
        "PostalCode": "85004",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-112.218924565813 33.6607829141045)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "12ae5ee1-fc3e-468b-9b92-3b970b169774",
        "ModifiedDate": "2011-08-01T00:00:00+07:00"
        },
        {
        "AddressId": 29,
        "AddressLine1": "8291 Crossbow Way",
        "AddressLine2": null,
        "City": "Memphis",
        "StateProvinceId": 72,
        "PostalCode": "38103",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-90.1599537213446 35.1727653015068)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "7cc794ad-1822-412b-ab94-337a89a1d0c9",
        "ModifiedDate": "2011-05-24T00:00:00+07:00"
        },
        {
        "AddressId": 30,
        "AddressLine1": "9707 Coldwater Drive",
        "AddressLine2": null,
        "City": "Orlando",
        "StateProvinceId": 15,
        "PostalCode": "32804",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-81.2829863937824 28.6211149133174)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "7431591f-36c1-4a65-b722-0e006db73557",
        "ModifiedDate": "2011-07-01T00:00:00+07:00"
        },
        {
        "AddressId": 31,
        "AddressLine1": "9100 Sheppard Avenue North",
        "AddressLine2": null,
        "City": "Ottawa",
        "StateProvinceId": 57,
        "PostalCode": "K4B 1T7",
        "SpatialLocation": {
            "Geography": {
            "CoordinateSystemId": 4326,
            "WellKnownText": "POINT (-75.3508830623448 45.3125878635219)",
            "WellKnownBinary": null
            }
        },
        "Rowguid": "644dea26-e6fd-4019-85e6-35364ddab0cc",
        "ModifiedDate": "2011-05-24T00:00:00+07:00"
        }];
  }
}