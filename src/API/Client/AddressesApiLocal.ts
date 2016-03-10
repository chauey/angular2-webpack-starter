import {URLSearchParams} from 'angular2/http';
import * as Rx from 'rxjs';
import { Injectable } from 'angular2/core';
import { IApi } from './IApi';

import { Address } from './Address';

'use strict';

@Injectable()
export class AddressesApiLocal implements IApi<Address> {
  _list: Address[];
  _keyName: string = 'addressId';


  constructor() {
    this.setListData();
  }


  public get(expand?: string, filter?: string, select?: string, orderBy?: string, top?: number, skip?: number, count?: boolean
    , extraHttpRequestParams?: any): Rx.Observable<{ count: number, list: Address[] }> {

    /* Using a disposable */
    let source = Rx.Observable.create(

      (observer) => {

        let id = setTimeout(() => {
          try {
            let listWithCount = {
              count: this._list.length,
              list: this._list
            };

            this.changeDateStringToDateObject(listWithCount.list);

            // filter
            if (filter) {
              listWithCount.list = this.filter(listWithCount.list, filter);
              listWithCount.count = listWithCount.list.length;
            }

            // sort
            if (orderBy) {
              listWithCount.list = this.sort(listWithCount.list, orderBy);
            }

            // paging
            if (top || skip) {
              listWithCount.list = this.paging(listWithCount.list, top, skip);
            }

            // select
            if (select) {
              // TODO:
            }

            observer.next(listWithCount);
            observer.complete();
          } catch (error) {
            observer.onError(error);
          }
        }, 500);

        // console.log('started');

        return () => {
          // console.log('disposal called');
          clearTimeout(id);
        };

      });

    // Note that this is optional, you do not have to return this if you require no cleanup
    // return Rx.Disposable.create(function () {
    //     console.log('disposed');
    // });
    //});

    return source;
  }

  public getById(id: number) {
    /* Using a disposable */
    let source = Rx.Observable.create(
      (observer) => {

        let timer = setTimeout(() => {
          try {
            let itemToReturn = this._list.filter((item) => {

              return item[this._keyName] === id;
            })[0];

            observer.next(itemToReturn);
            observer.complete();
          } catch (error) {
            observer.onError(error);
          }
        }, 500);
        return () => {
          // "disposal called""
          clearTimeout(timer);
        };

      });

    return source;
  }

  private sort(addresses, orderby) {
    return addresses.sort((a, b) => {
      if (a[orderby] < b[orderby])
        return -1;
      if (a[orderby] > b[orderby])
        return 1;
      return 0;
    });
  }

  private filter(addresses, keyword) {
    return addresses.filter((address) => {
      return ((address.addressLine1 && address.addressLine1.indexOf(keyword) >= 0) ||
        (address.addressLine2 && address.addressLine2.indexOf(keyword) >= 0) ||
        (address.city && address.city.indexOf(keyword) >= 0) ||
        (address.postalCode && address.postalCode.indexOf(keyword) >= 0));
    });
  }

  private paging(addresses, odataTop, odataSkip) {
    let top = odataTop ? Number(odataTop) : 0;
    let skip = odataSkip ? Number(odataSkip) : 0;

    if (top >= 0 && skip >= 0) {
      addresses = addresses.slice(skip, skip + top);
    }

    return addresses;
  }

  private changeDateStringToDateObject(list) {
    list.forEach(address => {
      address.modifiedDate = new Date(address.modifiedDate);
    });
  }


  static convertTo(list: any): Address[] {
    let listToReturn: Address[] = [];

    list.forEach(
      (item) => {
        listToReturn.push({
          addressId: item.addressId,
          addressLine1: item.addressLine1,
          addressLine2: item.addressLine2,
          city: item.city,
          stateProvinceId: item.stateProvinceId,
          postalCode: item.postalCode,
          spatialLocation: item.spatialLocation,
          rowguid: item.rowguid,
          modifiedDate: new Date(item.modifiedDate)
        }
        );
      });
    return listToReturn;
  }


  private setListData() {
    this._list = AddressesApiLocal.convertTo([{
      'addressId': 1,
      'addressLine1': '1970 Napa Ct.',
      'addressLine2': null,
      'city': 'Bothell',
      'stateProvinceId': 79,
      'postalCode': '98011',
      'spatialLocation': {
        'geography': {
          'coordinateSystemId': 4326,
          'wellKnownText': 'POINT (-122.164644615406 47.7869921906598)',
          'wellKnownBinary': null
        }
      },
      'rowguid': '9aadcb0d-36cf-483f-84d8-585c2d4ec6e9',
      'modifiedDate': '2007-12-04T00:00:00+07:00'
    },
      {
        'addressId': 2,
        'addressLine1': '9833 Mt. Dias Blv.',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.250185528911 47.6867097047995)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '32a54b9e-e034-4bfb-b573-a71cde60d8c0',
        'modifiedDate': '2008-11-30T00:00:00+07:00'
      },
      {
        'addressId': 3,
        'addressLine1': '7484 Roundtree Drive',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.274625789912 47.7631154083121)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '4c506923-6d1b-452c-a07c-baa6f5b142a4',
        'modifiedDate': '2013-03-07T00:00:00+07:00'
      },
      {
        'addressId': 4,
        'addressLine1': '9539 Glenside Dr',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.335726442416 47.7392386259644)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'e5946c78-4bcc-477f-9fa1-cc09de16a880',
        'modifiedDate': '2009-02-03T00:00:00+07:00'
      },
      {
        'addressId': 5,
        'addressLine1': '1226 Shoe St.',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.091323832402 47.7010357742081)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'fbaff937-4a97-4af0-81fd-b849900e9bb0',
        'modifiedDate': '2008-12-19T00:00:00+07:00'
      },
      {
        'addressId': 6,
        'addressLine1': '1399 Firestone Drive',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.360166703417 47.7058111306776)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'febf8191-9804-44c8-877a-33fde94f0075',
        'modifiedDate': '2009-02-13T00:00:00+07:00'
      },
      {
        'addressId': 7,
        'addressLine1': '5672 Hale Dr.',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.335726442416 47.7631154083121)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '0175a174-6c34-4d41-b3c1-4419cd6a0446',
        'modifiedDate': '2009-12-11T00:00:00+07:00'
      },
      {
        'addressId': 8,
        'addressLine1': '6387 Scenic Avenue',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.372386833918 47.7440139824339)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '3715e813-4dca-49e0-8f1c-31857d21f269',
        'modifiedDate': '2008-12-17T00:00:00+07:00'
      },
      {
        'addressId': 9,
        'addressLine1': '8713 Yosemite Ct.',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.189084876407 47.7201372000862)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '268af621-76d7-4c78-9441-144fd139821a',
        'modifiedDate': '2012-05-30T00:00:00+07:00'
      },
      {
        'addressId': 10,
        'addressLine1': '250 Race Court',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.042443310399 47.7822168341902)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '0b6b739d-8eb6-4378-8d55-fe196af34c04',
        'modifiedDate': '2008-12-02T00:00:00+07:00'
      },
      {
        'addressId': 11,
        'addressLine1': '1318 Lasalle Street',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.225745267909 47.8251950424161)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '981b3303-aca2-49c7-9a96-fb670785b269',
        'modifiedDate': '2013-02-28T00:00:00+07:00'
      },
      {
        'addressId': 12,
        'addressLine1': '5415 San Gabriel Dr.',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.335726442416 47.7201372000862)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '1c2c9cfe-ab9f-4f96-8e1f-d9666b6f7f22',
        'modifiedDate': '2013-01-05T00:00:00+07:00'
      },
      {
        'addressId': 13,
        'addressLine1': '9265 La Paz',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.0546634409 47.815644329477)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'e0ba2f52-c907-4553-a0db-67fc67d28ae4',
        'modifiedDate': '2013-12-14T00:00:00+07:00'
      },
      {
        'addressId': 14,
        'addressLine1': '8157 W. Book',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.164644615406 47.7822168341902)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'a1c658ae-c553-4a9d-a081-a550d39b64df',
        'modifiedDate': '2009-12-04T00:00:00+07:00'
      },
      {
        'addressId': 15,
        'addressLine1': '4912 La Vuelta',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.323506311915 47.7822168341902)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'f397e64a-a9d8-4e57-9e7c-b10928acadd6',
        'modifiedDate': '2013-11-18T00:00:00+07:00'
      },
      {
        'addressId': 16,
        'addressLine1': '40 Ellis St.',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.164644615406 47.7249125565558)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '0312b65f-cb60-4396-9ec7-a78b2eac1a1b',
        'modifiedDate': '2012-11-09T00:00:00+07:00'
      },
      {
        'addressId': 17,
        'addressLine1': '6696 Anchor Drive',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.250185528911 47.7344632694949)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'ce9b3b47-9267-4727-bcd2-687c47482c06',
        'modifiedDate': '2013-11-08T00:00:00+07:00'
      },
      {
        'addressId': 18,
        'addressLine1': '1873 Lion Circle',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.0668835714 47.7822168341902)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '963854f7-e3cb-46a1-a3db-1b05f71d6473',
        'modifiedDate': '2013-11-30T00:00:00+07:00'
      },
      {
        'addressId': 19,
        'addressLine1': '3148 Rose Street',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.347946572916 47.7392386259644)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '6b7acb0f-cdbf-44fd-ba14-eb08a56c1582',
        'modifiedDate': '2014-04-03T00:00:00+07:00'
      },
      {
        'addressId': 20,
        'addressLine1': '6872 Thornwood Dr.',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.140204354405 47.7344632694949)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '4b1f1ed4-97a4-43fd-bb1e-9e05817718e8',
        'modifiedDate': '2009-02-05T00:00:00+07:00'
      },
      {
        'addressId': 21,
        'addressLine1': '5747 Shirley Drive',
        'addressLine2': null,
        'city': 'Bothell',
        'stateProvinceId': 79,
        'postalCode': '98011',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.030223179898 47.7153618436167)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'd83299d7-a0f4-4055-9bd5-5908e245d757',
        'modifiedDate': '2009-02-11T00:00:00+07:00'
      },
      {
        'addressId': 22,
        'addressLine1': '636 Vine Hill Way',
        'addressLine2': null,
        'city': 'Portland',
        'stateProvinceId': 58,
        'postalCode': '97205',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.6223011785 45.5241741562999)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '7f641525-2704-4f73-9d8a-eb062cfbfa3c',
        'modifiedDate': '2011-05-24T00:00:00+07:00'
      },
      {
        'addressId': 23,
        'addressLine1': '6657 Sand Pointe Lane',
        'addressLine2': null,
        'city': 'Seattle',
        'stateProvinceId': 79,
        'postalCode': '98104',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.373607213 47.7295638308999)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'b991568f-5096-4a92-b25c-1a3e4d2acc66',
        'modifiedDate': '2009-01-15T00:00:00+07:00'
      },
      {
        'addressId': 24,
        'addressLine1': '80 Sunview Terrace',
        'addressLine2': null,
        'city': 'Duluth',
        'stateProvinceId': 36,
        'postalCode': '55802',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-92.0734750944588 46.8033901799154)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'be07d3c8-6e58-4670-9da9-151ab6d3d620',
        'modifiedDate': '2011-05-24T00:00:00+07:00'
      },
      {
        'addressId': 25,
        'addressLine1': '9178 Jumping St.',
        'addressLine2': null,
        'city': 'Dallas',
        'stateProvinceId': 73,
        'postalCode': '75201',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-96.7718703803229 32.7698003131228)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'c8df3bd9-48f0-4654-a8dd-14a67a84d3c6',
        'modifiedDate': '2012-07-31T00:00:00+07:00'
      },
      {
        'addressId': 26,
        'addressLine1': '5725 Glaze Drive',
        'addressLine2': null,
        'city': 'San Francisco',
        'stateProvinceId': 9,
        'postalCode': '94109',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-122.408489591016 37.7605893030868)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '77415959-a4ee-4da6-86f9-70c097560005',
        'modifiedDate': '2011-05-24T00:00:00+07:00'
      },
      {
        'addressId': 27,
        'addressLine1': '2487 Riverside Drive',
        'addressLine2': null,
        'city': 'Nevada',
        'stateProvinceId': 74,
        'postalCode': '84407',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-111.911600969772 41.252325627917)',
            'wellKnownBinary': null
          }
        },
        'rowguid': 'c1d0f3b0-6b2a-4388-8861-48f44d8270a1',
        'modifiedDate': '2011-05-24T00:00:00+07:00'
      },
      {
        'addressId': 28,
        'addressLine1': '9228 Via Del Sol',
        'addressLine2': null,
        'city': 'Phoenix',
        'stateProvinceId': 6,
        'postalCode': '85004',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-112.218924565813 33.6607829141045)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '12ae5ee1-fc3e-468b-9b92-3b970b169774',
        'modifiedDate': '2011-08-01T00:00:00+07:00'
      },
      {
        'addressId': 29,
        'addressLine1': '8291 Crossbow Way',
        'addressLine2': null,
        'city': 'Memphis',
        'stateProvinceId': 72,
        'postalCode': '38103',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-90.1599537213446 35.1727653015068)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '7cc794ad-1822-412b-ab94-337a89a1d0c9',
        'modifiedDate': '2011-05-24T00:00:00+07:00'
      },
      {
        'addressId': 30,
        'addressLine1': '9707 Coldwater Drive',
        'addressLine2': null,
        'city': 'Orlando',
        'stateProvinceId': 15,
        'postalCode': '32804',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-81.2829863937824 28.6211149133174)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '7431591f-36c1-4a65-b722-0e006db73557',
        'modifiedDate': '2011-07-01T00:00:00+07:00'
      },
      {
        'addressId': 31,
        'addressLine1': '9100 Sheppard Avenue North',
        'addressLine2': null,
        'city': 'Ottawa',
        'stateProvinceId': 57,
        'postalCode': 'K4B 1T7',
        'spatialLocation': {
          'geography': {
            'coordinateSystemId': 4326,
            'wellKnownText': 'POINT (-75.3508830623448 45.3125878635219)',
            'wellKnownBinary': null
          }
        },
        'rowguid': '644dea26-e6fd-4019-85e6-35364ddab0cc',
        'modifiedDate': '2011-05-24T00:00:00+07:00'
      }]);
  }
}
