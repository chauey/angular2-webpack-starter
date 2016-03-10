import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';

//import { DataService } from '../../services/DataService';
import { IApi } from '../../../API/Client/IApi';
import { IAddress } from '../../../API/Client/AddressInterface';

import { AddressesApiLocal } from '../../../API/Client/AddressesApiLocal';
import { StateProvinceApiLocal } from '../../../API/Client/StateProvinceApiLocal';

import { ValidationService } from '../../services/validation.service';
import { ValidationMessageComponent } from '../../components/common/validation-message.component';
import { DialogService } from '../../services/dialog.service';
import { DataStorageService } from '../../services/dataStorage.service';

import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

//import * as moment from 'moment/moment';
import moment = require('moment');
//import * as moment from 'moment/moment';
//import * as moment from 'moment';

@Component({
  selector: 'address-item',
  directives: [ValidationMessageComponent, ...DROPDOWN_DIRECTIVES],
  pipes: [],
  providers: [DialogService, DataStorageService, StateProvinceApiLocal],
  styles: [require('./address-item.component.css')],
  template: require('./address-item.component.html')
})

export class AddressItemComponent implements OnInit, CanDeactivate {

  _myForm: any;
  _isLoading: boolean;
  _isSaving: boolean;


  _id: number = null;
  _item: any = null;
  _submitted = false;
  _changed = false;
  _errorMessage: string;
  _momentFunction: any;
  _stateProvinceList: any = null;

  // TypeScript public modifiers
  constructor(private _router: Router,
    private _routeParams: RouteParams,
    private _AddressesApi: AddressesApiLocal, //IApi<IAddress>,
    private _StateProvinceApi: StateProvinceApiLocal,
    private _formBuilder: FormBuilder,
    private _dialog: DialogService,
    private _dataStorage: DataStorageService//,
    //private _moment: moment
  ) {
    this._momentFunction = moment; // TODO: inject the moment function in, not get from global?
    // template vs model driven forms http://blog.jhades.org/introduction-to-angular-2-forms-template-driven-vs-model-driven/
    // https://angular.io/docs/ts/latest/api/common/FormBuilder-class.html
    this.addFormValidation();
  }

  ngOnInit() {
    console.log('ngOnInit address-item component');

    this._id = this._routeParams.get('id') === 'new' ? null : + this._routeParams.get('id');
    console.log('ngOnInit address-item component id is: ' + this._id);

    this.populateStateProvinceData();

    if (this._id === null || this._id === undefined) {
      this._item = {};
    } else {
      this.getItem();
    }
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    // Allow synchronous navigation 'true` if the model is unchanged.
    if (this._submitted || this._myForm.pristine) {
      return true;
    }

    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    // TODO: reload item model changes if true.
    return this._dialog.confirm('Discard changes?');
  }

  debugItemJson() {
    window.alert(JSON.stringify(this._item));
  }

  customValidate() {
    console.log('customValidate');
  }

  goBack() {
    // TODO: find way to navigate back in history
    this._router.navigate(['List']);
  }

  onCancel() {
    // reload data for item model
    this._dataStorage.get(this._item);
    this._myForm._pristine = true;
  }

  onSubmit() {
    console.log('onSubmit called');
    // checkValidations
    this.customValidate();

    console.log(
      'this._myForm'
    );

    console.log(this._myForm);

    // if form valid, add.
    if (this._myForm.isValid) {
      this._isSaving = true;
      this._AddressesApi.save(this._item)
        .subscribe(
        item => {
          this._isSaving = false;
          this.gotoList();
        },
        error => {
          this._isSaving = false;
          this._errorMessage = <any>error;
          console.log(this._errorMessage);
        });


      //this._submitted = true;
    }
  }

  gotoList() {
    this._router.navigate(['List', { id: this._id }]);
  }

  private getItem() {
    // this._AddressesApi.addressesAddressIdGet(this.id)
    //   .subscribe(
    //   item => this.item = item,
    //   error => this.errorMessage = <any>error
    //   );

    this._isLoading = true;
    this._AddressesApi.getById(this._id)
      .subscribe(
      item => {
        this._isLoading = false;

        this._item = item;

        // TODO: not sure really need to convert if bind to input date type and Date object?
        if (this._item.modifiedDate !== '') {
          let date = new Date(this._item.modifiedDate);
          this._item.modifiedDate = this._momentFunction(date).format('YYYY-MM-DD');
          this._dataStorage.set(this._item);
        }
      },
      error => {
        this._isLoading = false;
        this._errorMessage = <any>error;
        console.log(this._errorMessage);
      }
      );
  }

  private populateStateProvinceData() {
    this._StateProvinceApi
      .get()
      .subscribe(
      (stateListWithCount) => { this._stateProvinceList = stateListWithCount.list; },
      (error) => { this._errorMessage = <any>error; });
  }

  private addFormValidation() {
    this._myForm = this._formBuilder.group({
      'id': ['', Validators.required],
      // http://www.carlrippon.com/?p=456
      'addressLine1': ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])],
      'addressLine2': ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])],
      'city': ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])],
      'modifiedDate': ['',
        Validators.compose([
          Validators.required
        ])],
      'postalCode': ['',
        Validators.compose([
          Validators.required
        ])],
      'rowguid': ['',
        Validators.compose([
          Validators.required
        ])],
      'stateProvinceId': ['',
        Validators.compose([
          Validators.required
        ])]
    });
  }
}
