import {URLSearchParams} from 'angular2/http';
import * as Rx from 'rxjs';
import { Injectable } from 'angular2/core';
import { IApi } from './IApi';

import { LocalQueryHelper } from './LocalQueryHelper';

'use strict';

@Injectable()
export abstract class BaseApiLocal<T> implements IApi<T> {
  _list: T[];
  _keyName: string = 'addressId';

  // TODO: don't need
  //_resourceName = 'resource';


  constructor(public _LocalQueryHelper: LocalQueryHelper) {
    this.setListData();
  }


  abstract convertTo(list: any): T[];
  //  {
  //   let listToReturn: T[] = [];

  //   list.forEach(
  //     (item) => {
  //       listToReturn.push({
  //         addressId: item.addressId,
  //         addressLine1: item.addressLine1,
  //         addressLine2: item.addressLine2,
  //         city: item.city,
  //         stateProvinceId: item.stateProvinceId,
  //         postalCode: item.postalCode,
  //         spatialLocation: item.spatialLocation,
  //         rowguid: item.rowguid,
  //         modifiedDate: new Date(item.modifiedDate)
  //       }
  //       );
  //     });
  //   return listToReturn;
  // }


  public get(expand?: string, filter?: string, select?: string, orderBy?: string, top?: number, skip?: number, count?: boolean
    , extraHttpRequestParams?: any): Rx.Observable<{ count: number, list: T[] }> {

    console.log('orderBy: ' + orderBy);
    /* Using a disposable */
    let source = Rx.Observable.create(

      (observer) => {

        let timer = setTimeout(() => {
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
              listWithCount.list = this._LocalQueryHelper.sort(listWithCount.list, orderBy);
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

  public getById(id: number): Rx.Observable<T> {
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

  public post(item?: T, extraHttpRequestParams?: any): Rx.Observable<T> {
    // UNDONE:
    return null;
  }

  public delete(id: number, ifMatch?: string, extraHttpRequestParams?: any): Rx.Observable<{}> {
    // UNDONE:
    return null;
  }

  public patch(id: number, item?: T, extraHttpRequestParams?: any): Rx.Observable<T> {
    // UNDONE:
    return null;
  }

  public save(item?: T, extraHttpRequestParams?: any): Rx.Observable<T> {
    // if is edit, else if new
    if (item[this._keyName] !== null) {
      // TODO: update from cloned WIP
      return this.patch(item[this._keyName], item);
    } else {
      // add new
      return this.post(item);
    }
  }


  protected filter(list, keyword) {
    // TODO: make more generic
    return list.filter((address) => {
      return ((address.addressLine1 && address.addressLine1.indexOf(keyword) >= 0) ||
        (address.addressLine2 && address.addressLine2.indexOf(keyword) >= 0) ||
        (address.city && address.city.indexOf(keyword) >= 0) ||
        (address.postalCode && address.postalCode.indexOf(keyword) >= 0));
    });
  }

  protected paging(list, odataTop, odataSkip) {
    let top = odataTop ? Number(odataTop) : 0;
    let skip = odataSkip ? Number(odataSkip) : 0;

    if (top >= 0 && skip >= 0) {
      list = list.slice(skip, skip + top);
    }

    return list;
  }

  protected changeDateStringToDateObject(list) {
    list.forEach(address => {
      address.modifiedDate = new Date(address.modifiedDate);
    });
  }

  protected setListData() {
  };

}
