import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {NgForm}    from 'angular2/common';

import { DataService } from '../../services/DataService';

@Component({
  selector: 'order-item',
  directives: [],
  pipes: [],
  providers: [],
  styles: [require('./order-item.component.css')],
  template: require('./order-item.component.html')
})

export class OrderItemComponent implements OnInit {
  // TypeScript public modifiers
  constructor(private _router: Router,
    private _routeParams: RouteParams,
    private _dataService: DataService) {

  }
  searchValue: string = '';

  id: number = null;
  model: any = null;
  submitted = false;

  ngOnInit() {
    console.log('ngOnInit order-item component');

    this.id = this._routeParams.get('id') === 'new' ? null : +this._routeParams.get('id');
    console.log('ngOnInit order-item component id is: ' + this.id);

    if (this.id === null || this.id === undefined) {
      this.model = {};
    } else {
      this.model = this._dataService.getOrderItem(this.id);
    }

  }

  customValidate() {
    console.log('customValidate');
  }

  onSubmit() {
    // checkValidations
    this.customValidate();

    // if form valid, add.
    if (true) { // this.inventoryItemForm.form.isValid) {
      // if is edit, else if new
      if (this.id !== null) {
        // TODO: update from cloned WIP
      } else {
        // add to data repo
        this._dataService.orderList.push(this.model);
      }

      this.gotoList();
    } else {
      // show not valid message
    }

    this.submitted = true;

    console.log('onSubmit called');
  }


  filter() {
    console.log('filter with value: ' + this.searchValue);
  }

  gotoList() {
    this._router.navigate(['List', { id: this.id }]);
  }
}
