import {URLSearchParams} from 'angular2/http';

export class SearchParams {  
  searchParams: URLSearchParams;
  constructor(select: null, orderby: null, expand: null, filter: null, top: null, skip: null, count: null) {
    let search = new URLSearchParams();
    if (select)
      search.set('$select', select);
    if (orderby)
      search.set('$orderby', orderby);
    if (expand)
      search.set('$expand', expand);
    if (filter)
      search.set('$filter', filter);
    if (top)
      search.set('$top', top);
    if (skip)
      search.set('$skip', skip);
    if (count)
      search.append('$count', count);
    this.searchParams = search;
  }
}