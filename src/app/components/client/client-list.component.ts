import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { DataService } from '../../services/DataService';

@Component({
  selector: 'client-list',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./client-list.component.css')],
  template: require('./client-list.component.html')
})

export class ClientListComponent {

  searchValue: string = '';
  clientList: any = this._dataService.clientList;

  constructor(private _router: Router, private _dataService: DataService) {
  }

  edit(id: number) {
    this._router.navigate(['Item', { id: id }]);
    console.log('edit with id: ' + id);
  }

  delete(id: number) {
    console.log('delete with id: ' + id);
  }

  filter() {
    console.log('filter with value: ' + this.searchValue);
  }

  ngOnInit() {
    console.log('ngOnInit client-list component');
  }

}
