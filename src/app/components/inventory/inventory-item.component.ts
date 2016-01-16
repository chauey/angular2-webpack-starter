import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {NgForm}    from 'angular2/common';

import { DataService } from '../../services/DataService';

@Component({
  selector: 'inventory-item',
  directives: [],
  pipes: [],
  providers: [],
  styles: [ require('./inventory-item.component.css') ],
  template: require('./inventory-item.component.html')
})
export class InventoryItem implements OnInit {
  // TypeScript public modifiers
  constructor(private _router: Router,
    private _routeParams: RouteParams,
    private _service: DataService) {

  }
      searchValue: string = 'search string test';

  id: number = null;
  model: any = null;
  submitted = false;

  ngOnInit() {
    console.log('ngOnInit inventory-item component');

    this.id = this._routeParams.get('id') === 'new' ? null : +this._routeParams.get('id');
    console.log('ngOnInit inventory-item component id is: ' + this.id);
    
    if(this.id === null || this.id === undefined) {
        this.model = {};
    }
    else {
        this.model = this._service.getInventoryItem(this.id); //.then(inventoryItem => this.model = inventoryItem);
    }
    
  }

    customValidate(){
        console.log('customValidate');    
    }

  onSubmit() { 
      // checkValidations
      this.customValidate();
      
      // if form valid, add.
      if(true) { // this.inventoryItemForm.form.isValid) {
          this._service.inventoryItemsView.push(this.model);
      }
      else {
          // show not valid message
      }
      this.submitted = true;
      
      console.log('onSubmit called');
    }
    
      
  filter() {
    console.log('filter with value: ' + this.searchValue);
  }
    
     gotoList() {
        this._router.navigate(['InvetoryList',  {id: this.id, foo: 'foo'} ]);
     }
}
