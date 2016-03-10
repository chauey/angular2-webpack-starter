import * as Rx from 'rxjs';
import { Error } from './Error'

'use strict';

export interface IApi<T> {
  _list: T[];

  /**
   * Get EntitySet
   * Returns the EntitySet Addresses
   * @param expand Expand navigation property
   * @param filter filter property
   * @param select select structural property
   * @param orderby order by some property
   * @param top top elements
   * @param skip skip elements
   * @param count include count in response
   */
  get(expand?: string, filter?: string, select?: string, orderBy?: string, top?: number, skip?: number, count?: boolean
    , extraHttpRequestParams?: any): Rx.Observable<{ count: number, list: T[] }>;

  getById(id: number):  T;
}
