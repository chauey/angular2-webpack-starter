import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';

//import { DataService } from '../../services/DataService';
import { AddressesApi } from '../../../API/Client/AddressesApi';

import { ValidationService } from '../../services/validation.service';
import { ValidationMessageComponent } from '../../components/common/validation-message.component';


@Component({
  selector: 'address-item',
  directives: [ValidationMessageComponent],
  pipes: [],
  providers: [],
  styles: [require('./address-item.component.css')],
  template: require('./address-item.component.html')
})

export class AddressItemComponent implements OnInit {

  myForm: any;
  searchValue: string = '';

  id: number = null;
  item: any = null;
  submitted = false;
  errorMessage: string;


  // TypeScript public modifiers
  constructor(private _router: Router,
    private _routeParams: RouteParams,
    private _AddressesApi: AddressesApi,
    private _formBuilder: FormBuilder
  ) {
    // template vs model driven forms http://blog.jhades.org/introduction-to-angular-2-forms-template-driven-vs-model-driven/
    // https://angular.io/docs/ts/latest/api/common/FormBuilder-class.html
    this.myForm = this._formBuilder.group({
      'id': ['', Validators.required],
      // http://www.carlrippon.com/?p=456
      'addressLine1': ['',
        Validators.compose([
          Validators.required,
          ValidationService.emailValidator,
          Validators.minLength(6)
        ])]
      //,
      //'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])
    });

  }



  ngOnInit() {
    console.log('ngOnInit address-item component');

    this.id = this._routeParams.get('id') === 'new' ? null : +this._routeParams.get('id');
    console.log('ngOnInit address-item component id is: ' + this.id);

    if (this.id === null || this.id === undefined) {
      this.item = {};
    } else {
      this.getItem();
    }

  }

  private getItem() {
    this._AddressesApi.addressesAddressIdGet(this.id)
      .subscribe(
      item => this.item = item,
      error => this.errorMessage = <any>error
      );

  }

  debugItemJson() {
    window.alert(JSON.stringify(this.item));
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
        ///this._dataService.addressList.push(this.model);
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
