import {URLSearchParams} from 'angular2/http';
import * as Rx from 'rxjs';
import { Injectable } from 'angular2/core';
import { IApi } from './IApi';

import { StateProvince } from './StateProvince';

'use strict';

@Injectable()
export class StateProvinceApiLocal implements IApi<StateProvince> {
  _list: StateProvince[];
  _keyName: string = 'stateProvinceId';

  constructor() { //, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
    this.setListData();
  }


  static convertTo(list: any): StateProvince[] {
    let listToReturn: StateProvince[] = [];

    list.forEach(
      (item) => {
        listToReturn.push({
          stateProvinceId: item.stateProvinceId,
          countryRegionCode: item.countryRegionCode,
          isOnlyStateProvinceFlag: item.isOnlyStateProvinceFlag,
          name: item.name,
          territoryId: item.territoryId,
          rowguid: item.rowguid,
          modifiedDate: new Date(item.modifiedDate)
        }
        );
      });

    return listToReturn;
  }


  public get(expand?: string, filter?: string, select?: string, orderBy?: string, top?: number, skip?: number, count?: boolean
    , extraHttpRequestParams?: any): Rx.Observable<{ count: number, list: StateProvince[] }> {

    /* Using a disposable */
    let source = Rx.Observable.create(

      (observer) => {

        let timer = setTimeout(() => {
          try {
            let listWithCount = {
              count: this._list.length,
              list: this._list
            };

            // this.changeDateStringToDateObject(listWithCount.list);

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
          clearTimeout(timer);
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
        }, 1000);

        // console.log('started');

        return () => {
          // console.log('disposal called');
          clearTimeout(timer);
        };

      });

    return source;
  }

  private sort(list, orderBy) {
    return list.sort((a, b) => {
      if (a[orderBy] < b[orderBy])
        return -1;
      if (a[orderBy] > b[orderBy])
        return 1;
      return 0;
    });
  }

  private filter(list, keyword) {
    // TODO: make this and sort filter paging more generic
    return list.filter((item) => {
      return ((item.addressLine1 && item.addressLine1.indexOf(keyword) >= 0) ||
        (item.addressLine2 && item.addressLine2.indexOf(keyword) >= 0) ||
        (item.city && item.city.indexOf(keyword) >= 0) ||
        (item.postalCode && item.postalCode.indexOf(keyword) >= 0));
    });
  }

  private paging(list, top: number = 10, skip: number = 0) {
    // TODO: remove let top = oDataTop ? Number(oDataTop) : 0;
    // let skip = oDataSkip ? Number(oDataSkip) : 0;

    if (top >= 0 && skip >= 0) {
      list = list.slice(skip, skip + top);
    }

    return list;
  }

  // private changeDateStringToDateObject(list) {
  //   list.forEach(item => {
  //     item.modifiedDate = new Date(item.modifiedDate);
  //   });
  // }



  private setListData() {
    this._list = StateProvinceApiLocal.convertTo(
      [
        {
          'stateProvinceId': 1,
          'stateProvinceCode': 'AB ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Alberta',
          'territoryId': 6,
          'rowguid': '298c2880-ab1c-4982-a5ad-a36eb4ba0d34',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 2,
          'stateProvinceCode': 'AK ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Alaska',
          'territoryId': 1,
          'rowguid': '5b7b8462-a888-4e0b-a3e1-7278f8af107e',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 3,
          'stateProvinceCode': 'AL ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Alabama',
          'territoryId': 5,
          'rowguid': '41b328be-21ae-45d0-841d-6f8dd71ce626',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 4,
          'stateProvinceCode': 'AR ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Arkansas',
          'territoryId': 3,
          'rowguid': '54656a80-06f2-4c70-ba10-247179fc246e',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 5,
          'stateProvinceCode': 'AS ',
          'countryRegionCode': 'AS',
          'isOnlyStateProvinceFlag': true,
          'name': 'American Samoa',
          'territoryId': 1,
          'rowguid': '255d15e1-9f6e-4cf8-9e5f-6b3858ad9b6a',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 6,
          'stateProvinceCode': 'AZ ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Arizona',
          'territoryId': 4,
          'rowguid': 'fb8be18e-f441-44f0-a4a9-1d0f204cb701',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 7,
          'stateProvinceCode': 'BC ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'British Columbia',
          'territoryId': 6,
          'rowguid': 'd27fcc6e-bb99-438b-ba86-285ceeb2fa53',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 8,
          'stateProvinceCode': 'BY ',
          'countryRegionCode': 'DE',
          'isOnlyStateProvinceFlag': false,
          'name': 'Bayern',
          'territoryId': 8,
          'rowguid': 'd54e5000-a0da-46d1-86b0-b8fe16c9f781',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 9,
          'stateProvinceCode': 'CA ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'California',
          'territoryId': 4,
          'rowguid': '3b2ff23c-1c75-40ae-9093-f4eb42263f4e',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 10,
          'stateProvinceCode': 'CO ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Colorado',
          'territoryId': 3,
          'rowguid': '292df595-7d3c-41fb-a040-7c184d379fce',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 11,
          'stateProvinceCode': 'CT ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Connecticut',
          'territoryId': 2,
          'rowguid': '1e7bb47a-e16b-4968-86fa-45af0211fa84',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 12,
          'stateProvinceCode': 'DC ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'District of Columbia',
          'territoryId': 2,
          'rowguid': 'a1f3c57e-85b3-41e3-88e8-07244cf087dd',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 13,
          'stateProvinceCode': 'DE ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Delaware',
          'territoryId': 2,
          'rowguid': '7a11ab1d-77c0-4021-9140-8e81f105618e',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 14,
          'stateProvinceCode': 'ENG',
          'countryRegionCode': 'GB',
          'isOnlyStateProvinceFlag': true,
          'name': 'England',
          'territoryId': 10,
          'rowguid': '3e3cb3f8-44b9-44d9-a1c3-cbfb11e0a7da',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 15,
          'stateProvinceCode': 'FL ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Florida',
          'territoryId': 5,
          'rowguid': 'ee8ba90d-b2c3-418e-93df-20e33f095959',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 16,
          'stateProvinceCode': 'FM ',
          'countryRegionCode': 'FM',
          'isOnlyStateProvinceFlag': true,
          'name': 'Micronesia',
          'territoryId': 9,
          'rowguid': '3202da35-aed4-40e2-9ec4-27c17f420170',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 17,
          'stateProvinceCode': 'GA ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Georgia',
          'territoryId': 5,
          'rowguid': 'a6ca20d1-31ac-4771-8994-93dbbdcce360',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 18,
          'stateProvinceCode': 'GU ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Guam',
          'territoryId': 4,
          'rowguid': '92b5a04e-26ec-4edb-8d14-e72e29b14411',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 19,
          'stateProvinceCode': 'HE ',
          'countryRegionCode': 'DE',
          'isOnlyStateProvinceFlag': false,
          'name': 'Hessen',
          'territoryId': 8,
          'rowguid': '834fc3df-b60d-4f94-95bd-aef8a9fb74e8',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 20,
          'stateProvinceCode': 'HH ',
          'countryRegionCode': 'DE',
          'isOnlyStateProvinceFlag': false,
          'name': 'Hamburg',
          'territoryId': 8,
          'rowguid': '1cc5a134-60d7-40c2-9269-cda494214abf',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 21,
          'stateProvinceCode': 'HI ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Hawaii',
          'territoryId': 1,
          'rowguid': '09cdccdc-b4b8-44ea-b04f-6ef521e3e720',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 22,
          'stateProvinceCode': 'IA ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Iowa',
          'territoryId': 3,
          'rowguid': '956a6c02-7d2f-4c9d-b275-8d2c0ef8fd83',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 23,
          'stateProvinceCode': 'ID ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Idaho',
          'territoryId': 1,
          'rowguid': '628e983a-33c7-4cb4-867f-274ef12b3597',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 24,
          'stateProvinceCode': 'IL ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Illinois',
          'territoryId': 3,
          'rowguid': '1f9120cf-683a-4132-a12c-98997fadeb26',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 25,
          'stateProvinceCode': 'IN ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Indiana',
          'territoryId': 2,
          'rowguid': '91f21ef0-c528-4310-bb29-6ba45ae75a17',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 26,
          'stateProvinceCode': 'KS ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Kansas',
          'territoryId': 3,
          'rowguid': '4eccc236-56e8-4ff7-b510-bf50e0966046',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 27,
          'stateProvinceCode': 'KY ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Kentucky',
          'territoryId': 5,
          'rowguid': '810918bc-45dc-4e01-8544-b322a05ec94e',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 28,
          'stateProvinceCode': 'LA ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Louisiana',
          'territoryId': 3,
          'rowguid': '4e2bc5a5-0c3e-421b-be18-5d79b4a7c0d0',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 29,
          'stateProvinceCode': 'LB ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Labrador',
          'territoryId': 6,
          'rowguid': '9847c998-a7bf-4a66-bbac-75939b092cc0',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 30,
          'stateProvinceCode': 'MA ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Massachusetts',
          'territoryId': 2,
          'rowguid': '77d7e754-1b03-4bb3-a4d4-b1a6ac1c968e',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 31,
          'stateProvinceCode': 'MB ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Manitoba',
          'territoryId': 6,
          'rowguid': '0ff23b5d-1e18-40f8-a886-9960ed699049',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 32,
          'stateProvinceCode': 'MD ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Maryland',
          'territoryId': 2,
          'rowguid': 'b3d8517d-a857-41e7-a692-a1cb02a5f667',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 33,
          'stateProvinceCode': 'ME ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Maine',
          'territoryId': 2,
          'rowguid': 'b978a102-632b-4345-8918-e0e8f440fc3b',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 34,
          'stateProvinceCode': 'MH ',
          'countryRegionCode': 'MH',
          'isOnlyStateProvinceFlag': true,
          'name': 'Marshall Islands',
          'territoryId': 9,
          'rowguid': 'c5c5a615-e2dd-4fdf-a4a7-0613c6ccae80',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 35,
          'stateProvinceCode': 'MI ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Michigan',
          'territoryId': 3,
          'rowguid': '0cb0855b-783a-4701-9d45-597a919bfb23',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 36,
          'stateProvinceCode': 'MN ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Minnesota',
          'territoryId': 3,
          'rowguid': '553c8daa-4142-427c-b772-66bedadef372',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 37,
          'stateProvinceCode': 'MO ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Missouri',
          'territoryId': 3,
          'rowguid': 'ff5d76ae-0b45-4f32-96f7-ad5b7775e9ec',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 38,
          'stateProvinceCode': 'MP ',
          'countryRegionCode': 'MP',
          'isOnlyStateProvinceFlag': true,
          'name': 'Northern Mariana Islands',
          'territoryId': 9,
          'rowguid': 'abebd704-db65-47f7-a778-528025f7e7f4',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 39,
          'stateProvinceCode': 'MS ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Mississippi',
          'territoryId': 5,
          'rowguid': 'd33f23c7-60be-4d31-8028-814a6cca7f37',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 40,
          'stateProvinceCode': 'MT ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Montana',
          'territoryId': 1,
          'rowguid': 'd4ff6e1a-a8e8-4379-a43c-746dbb0d6d13',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 41,
          'stateProvinceCode': 'NB ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Brunswick',
          'territoryId': 6,
          'rowguid': 'c28c848f-ae86-4859-9e7e-0190d6c22700',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 42,
          'stateProvinceCode': 'NC ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'North Carolina',
          'territoryId': 5,
          'rowguid': '2c1c5211-3388-4dff-b0ff-db0b43e4a22d',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 43,
          'stateProvinceCode': 'ND ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'North Dakota',
          'territoryId': 3,
          'rowguid': '1551bea8-4dee-477d-858f-45ff7a2fb14f',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 44,
          'stateProvinceCode': 'NE ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Nebraska',
          'territoryId': 3,
          'rowguid': '2dea1c82-a684-4d7c-bea2-4119d9d3ae60',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 45,
          'stateProvinceCode': 'NF ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Newfoundland',
          'territoryId': 6,
          'rowguid': '26d01b6d-3726-453f-b1f3-98a332eb3d8d',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 46,
          'stateProvinceCode': 'NH ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'New Hampshire',
          'territoryId': 2,
          'rowguid': 'b30c26ae-62e3-499a-80a8-a167275baebd',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 47,
          'stateProvinceCode': 'NJ ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'New Jersey',
          'territoryId': 2,
          'rowguid': '7464d0b1-78a7-4f8a-b4cc-375900005f46',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 48,
          'stateProvinceCode': 'NM ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'New Mexico',
          'territoryId': 4,
          'rowguid': '11deda26-4733-497f-bae3-7bed6b076600',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 49,
          'stateProvinceCode': 'NS ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Nova Scotia',
          'territoryId': 6,
          'rowguid': 'adf58ba5-269f-4c48-8c7d-6754e4667acf',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 50,
          'stateProvinceCode': 'NSW',
          'countryRegionCode': 'AU',
          'isOnlyStateProvinceFlag': false,
          'name': 'New South Wales',
          'territoryId': 9,
          'rowguid': '9910dd7e-a4c5-4599-86f5-9f581b53a92d',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 51,
          'stateProvinceCode': 'NT ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Northwest Territories',
          'territoryId': 6,
          'rowguid': 'ccaac582-ef30-492c-93ce-5f8b3452d531',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 52,
          'stateProvinceCode': 'NV ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Nevada',
          'territoryId': 1,
          'rowguid': '50e0fbe0-50b7-40eb-a20b-aaae85a680dd',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 53,
          'stateProvinceCode': 'NW ',
          'countryRegionCode': 'DE',
          'isOnlyStateProvinceFlag': false,
          'name': 'Nordrhein-Westfalen',
          'territoryId': 8,
          'rowguid': 'c385b296-fbb7-44e1-9ded-23b7fba346f0',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 54,
          'stateProvinceCode': 'NY ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'New York',
          'territoryId': 2,
          'rowguid': '4f83e68d-4c26-4c53-a4b3-46b7f19c6498',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 55,
          'stateProvinceCode': 'OH ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Ohio',
          'territoryId': 2,
          'rowguid': '6e1792b5-d021-47b1-98fc-9d60f46f3400',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 56,
          'stateProvinceCode': 'OK ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Oklahoma',
          'territoryId': 3,
          'rowguid': 'aa680eba-b546-4718-8379-963da0cea86f',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 57,
          'stateProvinceCode': 'ON ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Ontario',
          'territoryId': 6,
          'rowguid': '5528e2cf-ae39-4f65-bd32-fa32c6ff96fa',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 58,
          'stateProvinceCode': 'OR ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Oregon',
          'territoryId': 1,
          'rowguid': '17ebf52e-94c8-4e7b-9ef3-5b6236763b49',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 59,
          'stateProvinceCode': 'PA ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Pennsylvania',
          'territoryId': 2,
          'rowguid': '9e1d834c-7076-4546-9f1b-1bd626037250',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 60,
          'stateProvinceCode': 'PE ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Prince Edward Island',
          'territoryId': 6,
          'rowguid': '8b3ec300-24f0-42ab-8dcf-60f45f007642',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 61,
          'stateProvinceCode': 'PR ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Puerto Rico',
          'territoryId': 5,
          'rowguid': '71b87f6c-5c07-4b7f-8d8c-2c5310410579',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 62,
          'stateProvinceCode': 'PW ',
          'countryRegionCode': 'PW',
          'isOnlyStateProvinceFlag': true,
          'name': 'Palau',
          'territoryId': 9,
          'rowguid': 'efcf1702-2358-40fc-be8f-df6d71a7d89a',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 63,
          'stateProvinceCode': 'QC ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Quebec',
          'territoryId': 6,
          'rowguid': 'ff830158-3466-495f-bfcf-8a1b82a65355',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 64,
          'stateProvinceCode': 'QLD',
          'countryRegionCode': 'AU',
          'isOnlyStateProvinceFlag': false,
          'name': 'Queensland',
          'territoryId': 9,
          'rowguid': '152658fa-ad59-4fa0-82a6-f76980f0183f',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 65,
          'stateProvinceCode': 'RI ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Rhode Island',
          'territoryId': 2,
          'rowguid': '7fc72ab3-646d-475f-a708-544af3636aa8',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 66,
          'stateProvinceCode': 'SA ',
          'countryRegionCode': 'AU',
          'isOnlyStateProvinceFlag': false,
          'name': 'South Australia',
          'territoryId': 9,
          'rowguid': 'dcae37cd-fd8d-41fe-90ed-edad22b63dc8',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 67,
          'stateProvinceCode': 'SC ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'South Carolina',
          'territoryId': 5,
          'rowguid': '131cf47d-4f64-4a08-afcb-0a1ee17a8534',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 68,
          'stateProvinceCode': 'SD ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'South Dakota',
          'territoryId': 3,
          'rowguid': '90aad17f-451f-42a1-9cf8-ec65b0acb34f',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 69,
          'stateProvinceCode': 'SK ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Saskatchewan',
          'territoryId': 6,
          'rowguid': 'd44759ba-43e8-42e7-98fa-54b377c734fc',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 70,
          'stateProvinceCode': 'SL ',
          'countryRegionCode': 'DE',
          'isOnlyStateProvinceFlag': false,
          'name': 'Saarland',
          'territoryId': 8,
          'rowguid': 'f555dd9e-a190-4dc4-9433-7fe257aa6e82',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 71,
          'stateProvinceCode': 'TAS',
          'countryRegionCode': 'AU',
          'isOnlyStateProvinceFlag': false,
          'name': 'Tasmania',
          'territoryId': 9,
          'rowguid': '2db59b03-9f19-4d12-acef-974016827be1',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 72,
          'stateProvinceCode': 'TN ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Tennessee',
          'territoryId': 5,
          'rowguid': 'd1b0f98f-514d-42b4-b84b-9c40a8a455d5',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 73,
          'stateProvinceCode': 'TX ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Texas',
          'territoryId': 4,
          'rowguid': '99c542e0-5d3d-43a6-8d96-af65a985d6e4',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 74,
          'stateProvinceCode': 'UT ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Utah',
          'territoryId': 1,
          'rowguid': 'fd66be42-bfef-4233-942b-e8d79a594afa',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 75,
          'stateProvinceCode': 'VA ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Virginia',
          'territoryId': 5,
          'rowguid': '990aa59c-838c-410f-a675-17eb861fa33f',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 76,
          'stateProvinceCode': 'VI ',
          'countryRegionCode': 'VI',
          'isOnlyStateProvinceFlag': true,
          'name': 'Virgin Islands',
          'territoryId': 5,
          'rowguid': '14f593d3-1500-477d-ac6b-d41b3fafbe5a',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 77,
          'stateProvinceCode': 'VIC',
          'countryRegionCode': 'AU',
          'isOnlyStateProvinceFlag': false,
          'name': 'Victoria',
          'territoryId': 9,
          'rowguid': '6a683928-8f1f-4369-a64a-60979e216824',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 78,
          'stateProvinceCode': 'VT ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Vermont',
          'territoryId': 2,
          'rowguid': '348687e4-7879-4d74-afd7-c8511588cfa3',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 79,
          'stateProvinceCode': 'WA ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Washington',
          'territoryId': 1,
          'rowguid': '16274df0-6f05-43a6-bc18-ad171017a1eb',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 80,
          'stateProvinceCode': 'WI ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Wisconsin',
          'territoryId': 3,
          'rowguid': '9d93821e-3add-42de-bd51-81cfa94046ff',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 81,
          'stateProvinceCode': 'WV ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'West Virginia',
          'territoryId': 5,
          'rowguid': 'c9ce898f-8e21-4fbf-a70a-06f32d543a18',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 82,
          'stateProvinceCode': 'WY ',
          'countryRegionCode': 'US',
          'isOnlyStateProvinceFlag': false,
          'name': 'Wyoming',
          'territoryId': 1,
          'rowguid': '778951dc-0475-4054-8cab-892c8a38174e',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 83,
          'stateProvinceCode': 'YT ',
          'countryRegionCode': 'CA',
          'isOnlyStateProvinceFlag': false,
          'name': 'Yukon Territory',
          'territoryId': 6,
          'rowguid': 'a01f5896-c4b1-4c2a-9f60-56470dd39f82',
          'modifiedDate': '2014-02-08T10:17:21.587+07:00'
        },
        {
          'stateProvinceId': 84,
          'stateProvinceCode': 'FR ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': true,
          'name': 'France',
          'territoryId': 7,
          'rowguid': '092c7063-901e-414b-bc61-0bf7919da883',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 85,
          'stateProvinceCode': 'BB ',
          'countryRegionCode': 'DE',
          'isOnlyStateProvinceFlag': false,
          'name': 'Brandenburg',
          'territoryId': 8,
          'rowguid': 'dd386c06-2beb-4f18-9a85-c066f1a47ea1',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 86,
          'stateProvinceCode': 'SN ',
          'countryRegionCode': 'DE',
          'isOnlyStateProvinceFlag': false,
          'name': 'Saxony',
          'territoryId': 8,
          'rowguid': 'c3e9d0d7-12e7-4395-ac37-11498a3c5e2d',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 87,
          'stateProvinceCode': '01 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Ain',
          'territoryId': 7,
          'rowguid': 'f6f7985c-9132-46b5-8963-f99c9f3234de',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 88,
          'stateProvinceCode': '02 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Aisne',
          'territoryId': 7,
          'rowguid': '1b30c5e7-9bb4-4546-9306-4600ca0e90ca',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 89,
          'stateProvinceCode': '03 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Allier',
          'territoryId': 7,
          'rowguid': 'dd59673d-852a-4aaf-9b27-623f54477ec2',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 90,
          'stateProvinceCode': '04 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Alpes-de-Haute Provence',
          'territoryId': 7,
          'rowguid': '458480b4-e4ab-4015-b73a-1b7296f8b8b3',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 91,
          'stateProvinceCode': '05 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Alpes (Haute)',
          'territoryId': 7,
          'rowguid': '0af69922-9301-4e3e-8592-e7a268a27b7a',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 92,
          'stateProvinceCode': '06 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Alpes-Maritimes',
          'territoryId': 7,
          'rowguid': '1aaa549b-d0d0-4cfe-be07-8f2858d44505',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 93,
          'stateProvinceCode': '07 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Ardèche',
          'territoryId': 7,
          'rowguid': '7c566b51-1e45-4bff-98b7-34cb813de6e1',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 94,
          'stateProvinceCode': '08 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Ardennes',
          'territoryId': 7,
          'rowguid': '91e9286b-e601-4f26-95e4-062865e515bf',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 95,
          'stateProvinceCode': '09 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Ariège',
          'territoryId': 7,
          'rowguid': 'fe5a9442-417c-48c3-b582-ed40b7813c2c',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 96,
          'stateProvinceCode': '10 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Aube',
          'territoryId': 7,
          'rowguid': '519d0fb2-ffbf-4b4b-9112-58fea32d84e6',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 97,
          'stateProvinceCode': '11 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Aude',
          'territoryId': 7,
          'rowguid': 'b451ce92-b0f6-47ff-8769-050050432c9c',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 98,
          'stateProvinceCode': '12 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Aveyron',
          'territoryId': 7,
          'rowguid': '79cd2767-a7d9-4bd6-beec-d2cdf4da0af1',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 99,
          'stateProvinceCode': '13 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Bouches du Rhône',
          'territoryId': 7,
          'rowguid': '32519bd3-40c2-4976-8579-0f1a7d2d3de4',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 100,
          'stateProvinceCode': '14 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Calvados',
          'territoryId': 7,
          'rowguid': '2bd91456-c8ae-4a5d-9270-a4a446eccacb',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 101,
          'stateProvinceCode': '15 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Cantal',
          'territoryId': 7,
          'rowguid': '01cec802-20ce-4f96-b475-2ad263cea9d0',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 102,
          'stateProvinceCode': '16 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Charente',
          'territoryId': 7,
          'rowguid': '2659c871-80a6-4b8c-b70f-c797d0398bc4',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 103,
          'stateProvinceCode': '17 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Charente-Maritime',
          'territoryId': 7,
          'rowguid': '00723e00-c976-401d-a92b-e582df3d6e01',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 104,
          'stateProvinceCode': '18 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Cher',
          'territoryId': 7,
          'rowguid': '6adb6ece-a89e-4b00-a886-90436ecd9b68',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 105,
          'stateProvinceCode': '19 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Corrèze',
          'territoryId': 7,
          'rowguid': '2363831b-b0ba-4976-92fa-1930817f66c4',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 106,
          'stateProvinceCode': '20 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Corse',
          'territoryId': 7,
          'rowguid': 'b424959c-9400-492b-9b4c-9f478b77a02c',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 107,
          'stateProvinceCode': '21 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Côte d\'Or',
          'territoryId': 7,
          'rowguid': '6e9c32d8-b47a-444e-818e-54ecce0b779b',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 108,
          'stateProvinceCode': '22 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Côtes-d\'Armor',
          'territoryId': 7,
          'rowguid': 'a18c188b-64ac-44f6-9928-eb8fc2b924fd',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 109,
          'stateProvinceCode': '23 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Creuse',
          'territoryId': 7,
          'rowguid': 'd745141e-8645-4309-abab-76a95a8b0a83',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 110,
          'stateProvinceCode': '24 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Dordogne',
          'territoryId': 7,
          'rowguid': '6eba51c3-31d2-4376-a4e2-9121b048768f',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 111,
          'stateProvinceCode': '25 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Toubs',
          'territoryId': 7,
          'rowguid': 'f0622ec9-4eb7-4019-9b08-fd2ed3f74b9b',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 112,
          'stateProvinceCode': '26 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Drôme',
          'territoryId': 7,
          'rowguid': 'be52295d-d7bd-4dc6-8862-82c0a03dbb30',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 113,
          'stateProvinceCode': '27 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Eure',
          'territoryId': 7,
          'rowguid': '8d04729d-75ef-410e-9d04-a95fa51b4b02',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 114,
          'stateProvinceCode': '28 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Eure et Loir',
          'territoryId': 7,
          'rowguid': '51cc8b1d-a2a1-440b-8105-bf0e6c74d213',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 115,
          'stateProvinceCode': '29 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Finistère',
          'territoryId': 7,
          'rowguid': 'f35691e8-878a-4b62-90d8-3de2fb7fae1e',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 116,
          'stateProvinceCode': '30 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Gard',
          'territoryId': 7,
          'rowguid': '486709b6-66ca-4778-8dde-13783af7f08b',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 117,
          'stateProvinceCode': '31 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Garonne (Haute)',
          'territoryId': 7,
          'rowguid': 'd1c5af23-8e71-4320-845f-d324d2d83011',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 118,
          'stateProvinceCode': '32 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Gers',
          'territoryId': 7,
          'rowguid': '1e387594-ef10-401a-820e-58cc44c71d0c',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 119,
          'stateProvinceCode': '33 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Gironde',
          'territoryId': 7,
          'rowguid': '90b73724-a580-44a6-a1ce-54f98235b83b',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 120,
          'stateProvinceCode': '34 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Hérault',
          'territoryId': 7,
          'rowguid': 'ab4408a6-1acb-4af4-9b1e-217636d7f3ca',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 121,
          'stateProvinceCode': '35 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Ille et Vilaine',
          'territoryId': 7,
          'rowguid': 'daf07757-b0b3-49e9-ad2a-cb659ed2b2b4',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 122,
          'stateProvinceCode': '36 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Indre',
          'territoryId': 7,
          'rowguid': 'aa7107a6-c155-491d-9df3-48cf033af366',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 123,
          'stateProvinceCode': '37 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Indre et Loire',
          'territoryId': 7,
          'rowguid': 'e8b02fcc-964e-4fdc-ab7e-287f4df5142b',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 124,
          'stateProvinceCode': '38 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Isère',
          'territoryId': 7,
          'rowguid': '9c594ba5-1a5b-4b65-8ebe-85bf850fe27b',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 125,
          'stateProvinceCode': '39 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Jura',
          'territoryId': 7,
          'rowguid': '2d5e0bde-f3c4-4887-b89f-dca00bab9d63',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 126,
          'stateProvinceCode': '40 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Landes',
          'territoryId': 7,
          'rowguid': '95827758-97c8-4058-b5a5-afedfaf4f70f',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 127,
          'stateProvinceCode': '41 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Loir et Cher',
          'territoryId': 7,
          'rowguid': '17ec707a-33f7-4261-86cb-9641c2927172',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 128,
          'stateProvinceCode': '42 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Loire',
          'territoryId': 7,
          'rowguid': '58b4525b-5306-4390-9ee9-48e2d9502c02',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 129,
          'stateProvinceCode': '43 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Loire (Haute)',
          'territoryId': 7,
          'rowguid': 'f18ba5b9-2168-4872-9c80-e7f097ab88e0',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 130,
          'stateProvinceCode': '44 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Loire Atlantique',
          'territoryId': 7,
          'rowguid': 'a87b21f6-4c5c-4735-8615-bba99a16ace2',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 131,
          'stateProvinceCode': '45 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Loiret',
          'territoryId': 7,
          'rowguid': 'cc67b8c0-bab9-4978-8b61-fa985ae094e1',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 132,
          'stateProvinceCode': '46 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Lot',
          'territoryId': 7,
          'rowguid': 'fe593326-b0f0-433d-a060-7aa2d37d9cea',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 133,
          'stateProvinceCode': '47 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Lot et Garonne',
          'territoryId': 7,
          'rowguid': '4ff85d44-e027-4341-a3b2-b9ba564547f8',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 134,
          'stateProvinceCode': '48 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Lozère',
          'territoryId': 7,
          'rowguid': 'b862bbab-aef6-4c4d-881f-4207254983c7',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 135,
          'stateProvinceCode': '49 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Maine et Loire',
          'territoryId': 7,
          'rowguid': 'ef2487e7-0965-4abe-a06c-84cef8964386',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 136,
          'stateProvinceCode': '50 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Manche',
          'territoryId': 7,
          'rowguid': '8139979c-2881-4668-9a8e-a45154f809ea',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 137,
          'stateProvinceCode': '51 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Marne',
          'territoryId': 7,
          'rowguid': '41b9cb24-50b3-43f7-9e0e-79d901bd45d0',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 138,
          'stateProvinceCode': '52 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Marne (Haute)',
          'territoryId': 7,
          'rowguid': 'babce9d8-a133-4195-875f-1e65e48844c9',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 139,
          'stateProvinceCode': '53 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Mayenne',
          'territoryId': 7,
          'rowguid': '59593a57-5319-43b4-ad3b-78abcb6c12f2',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 140,
          'stateProvinceCode': '54 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Meurthe et Moselle',
          'territoryId': 7,
          'rowguid': '8ce54442-acf1-404d-ae17-540e4da781af',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 141,
          'stateProvinceCode': '55 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Meuse',
          'territoryId': 7,
          'rowguid': 'ca5ed35c-0542-43ed-8f15-a5e1c9c9ab90',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 142,
          'stateProvinceCode': '56 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Morbihan',
          'territoryId': 7,
          'rowguid': 'a1b147fe-14c8-4cb2-9902-c437ff44ce7b',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 143,
          'stateProvinceCode': '57 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Moselle',
          'territoryId': 7,
          'rowguid': '23ec96b5-21ee-4769-be59-812eae26a216',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 144,
          'stateProvinceCode': '58 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Nièvre',
          'territoryId': 7,
          'rowguid': 'c6088b46-64b3-492c-a4cd-f81b93f351a1',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 145,
          'stateProvinceCode': '59 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Nord',
          'territoryId': 7,
          'rowguid': '70943de7-d74a-4de7-8dcf-3fea66efcfdb',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 146,
          'stateProvinceCode': '60 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Oise',
          'territoryId': 7,
          'rowguid': 'e15a21bc-1bdb-413e-93fb-0a81d6869068',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 147,
          'stateProvinceCode': '61 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Orne',
          'territoryId': 7,
          'rowguid': '24753bb2-e1f6-4d1f-b659-81f2ad4a9458',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 148,
          'stateProvinceCode': '62 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Pas de Calais',
          'territoryId': 7,
          'rowguid': '72450195-ed1e-4a21-8cc5-5aac8eb9327a',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 149,
          'stateProvinceCode': '63 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Puy de Dôme',
          'territoryId': 7,
          'rowguid': 'e222d130-0d35-4c6a-9a98-024a758fc677',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 150,
          'stateProvinceCode': '64 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Pyrénées Atlantiques',
          'territoryId': 7,
          'rowguid': 'f3b411d2-9e8c-4d53-ab5b-06016a44356b',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 151,
          'stateProvinceCode': '65 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Pyrénées (Hautes)',
          'territoryId': 7,
          'rowguid': 'b5dca57f-0714-4f42-81af-0c5c9eca01f9',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 152,
          'stateProvinceCode': '66 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Pyrénées Orientales',
          'territoryId': 7,
          'rowguid': '0374fd8e-3a19-4a9b-bb9e-db5871503afe',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 153,
          'stateProvinceCode': '67 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Rhin (Bas)',
          'territoryId': 7,
          'rowguid': '196859b3-40c3-4d54-abbd-ef6aa8386df9',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 154,
          'stateProvinceCode': '68 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Rhin (Haut)',
          'territoryId': 7,
          'rowguid': '1192f8bf-cca6-4ce2-bd08-2dd6e80b6cf6',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 155,
          'stateProvinceCode': '69 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Rhône',
          'territoryId': 7,
          'rowguid': 'd4f170d0-ff06-4a97-8de3-9f377272aa74',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 156,
          'stateProvinceCode': '70 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Saône (Haute)',
          'territoryId': 7,
          'rowguid': '546feb94-3737-4698-ba0d-dc051c088939',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 157,
          'stateProvinceCode': '71 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Saône et Loire',
          'territoryId': 7,
          'rowguid': '5d86860e-614e-4940-9cc4-549077196d5a',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 158,
          'stateProvinceCode': '72 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Sarthe',
          'territoryId': 7,
          'rowguid': '0e32d0e5-e9c9-404d-b500-180bec6637d8',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 159,
          'stateProvinceCode': '73 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Savoie',
          'territoryId': 7,
          'rowguid': 'f8931ede-4941-420b-8d87-11c8514bc080',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 160,
          'stateProvinceCode': '74 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Savoie Haute',
          'territoryId': 7,
          'rowguid': '126ab534-ff0b-474e-aefe-1caa53c9c3a2',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 161,
          'stateProvinceCode': '75 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Seine (Paris)',
          'territoryId': 7,
          'rowguid': 'e117a6fc-24b9-438b-86ff-8455107f4e9f',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 162,
          'stateProvinceCode': '76 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Seine Maritime',
          'territoryId': 7,
          'rowguid': '46070a8d-2b94-4a05-a29b-189f7ffa7c56',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 163,
          'stateProvinceCode': '77 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Seine et Marne',
          'territoryId': 7,
          'rowguid': 'fd1511db-0a30-4b14-b60e-d2247473415e',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 164,
          'stateProvinceCode': '78 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Yveline',
          'territoryId': 7,
          'rowguid': 'a111eb2e-3217-485a-a510-673c0843c615',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 165,
          'stateProvinceCode': '79 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Sèvres (Deux)',
          'territoryId': 7,
          'rowguid': '38e0a3d9-e813-454c-be54-6f019d687ecb',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 166,
          'stateProvinceCode': '80 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Somme',
          'territoryId': 7,
          'rowguid': '8366de5d-5615-4168-9104-4379f9e59090',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 167,
          'stateProvinceCode': '81 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Tarne',
          'territoryId': 7,
          'rowguid': '406b4fd5-e4a8-4db7-838b-8a33a617f242',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 168,
          'stateProvinceCode': '82 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Tarne et Garonne',
          'territoryId': 7,
          'rowguid': '544f6f15-6359-45ca-b271-2a310e6cf151',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 169,
          'stateProvinceCode': '83 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Var',
          'territoryId': 7,
          'rowguid': '08a673dc-6056-45b2-903c-976e8b6bd0b9',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 170,
          'stateProvinceCode': '84 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Vaucluse',
          'territoryId': 7,
          'rowguid': '29691831-aced-46f8-bad2-a8c914b4f9f4',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 171,
          'stateProvinceCode': '85 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'La Vendée',
          'territoryId': 7,
          'rowguid': '2a5a84c2-30b0-4791-8da1-25e3dde497d8',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 172,
          'stateProvinceCode': '86 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Vienne',
          'territoryId': 7,
          'rowguid': '78a90d81-396c-431a-aa14-0751f2644b25',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 173,
          'stateProvinceCode': '87 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Vienne (Haute)',
          'territoryId': 7,
          'rowguid': 'ab61f91c-50e3-45c3-a9d2-140940cecbf0',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 174,
          'stateProvinceCode': '88 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Vosges',
          'territoryId': 7,
          'rowguid': '5a5cb4c2-72a1-40b7-a779-5a36b76e3942',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 175,
          'stateProvinceCode': '89 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Yonne',
          'territoryId': 7,
          'rowguid': '3f8de296-bee5-4980-b81f-ebfcc1b16790',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 176,
          'stateProvinceCode': '90 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Belford (Territoire de)',
          'territoryId': 7,
          'rowguid': '76adcaaa-4eb2-4ad8-893b-ef9f3cb5c6fb',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 177,
          'stateProvinceCode': '91 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Essonne',
          'territoryId': 7,
          'rowguid': '35894a81-c267-4511-a706-99ea2c08181f',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 178,
          'stateProvinceCode': '92 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Hauts de Seine',
          'territoryId': 7,
          'rowguid': 'f8fd6d62-a913-4f10-9e42-d348eda02bd9',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 179,
          'stateProvinceCode': '93 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Seine Saint Denis',
          'territoryId': 7,
          'rowguid': '466c15bc-46ec-427d-99db-98c380634527',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 180,
          'stateProvinceCode': '94 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Val de Marne',
          'territoryId': 7,
          'rowguid': 'fe0a2a02-fe1d-4b79-b970-167ec7f724fc',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        },
        {
          'stateProvinceId': 181,
          'stateProvinceCode': '95 ',
          'countryRegionCode': 'FR',
          'isOnlyStateProvinceFlag': false,
          'name': 'Val d\'Oise',
          'territoryId': 7,
          'rowguid': 'e7580d97-910b-42b4-b4e2-72c8733889e0',
          'modifiedDate': '2008-04-30T00:00:00+07:00'
        }
      ]);
  }


}
