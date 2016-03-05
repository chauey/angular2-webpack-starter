import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';

//import { DataService } from '../../services/DataService';
import { AddressesApiLocal } from '../../../API/Client/AddressesApiLocal';

import { ValidationService } from '../../services/validation.service';
import { ValidationMessageComponent } from '../../components/common/validation-message.component';
import { DialogService } from '../../services/dialog.service';
import { DataStorageService } from '../../services/dataStorage.service';
import * as moment from 'moment';

@Component({
    selector: 'address-item',
    directives: [ValidationMessageComponent],
    pipes: [],
    providers: [DialogService, DataStorageService, moment],
    styles: [require('./address-item.component.css')],
    template: require('./address-item.component.html')
})

export class AddressItemComponent implements OnInit, CanDeactivate {

    myForm: any;
    searchValue: string = '';

    id: number = null;
    item: any = null;
    submitted = false;
    changed = false;
    errorMessage: string;

    // TypeScript public modifiers
    constructor(private _router: Router,
        private _routeParams: RouteParams,
        private _AddressesApiLocal: AddressesApiLocal,
        private _formBuilder: FormBuilder,
        private _dialog: DialogService,
        private _dataStorage: DataStorageService,
        private _moment: moment
    ) {
        // template vs model driven forms http://blog.jhades.org/introduction-to-angular-2-forms-template-driven-vs-model-driven/
        // https://angular.io/docs/ts/latest/api/common/FormBuilder-class.html
        this.formValidate();
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

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
        // Allow synchronous navigation 'true` if the model is unchanged.
        if (this.submitted || this.myForm.pristine) {
            return true;
        }

        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        // TODO: reload item model changes if true.
        return this._dialog.confirm('Discard changes?');
    }

    debugItemJson() {
        window.alert(JSON.stringify(this.item));
    }

    customValidate() {
        console.log('customValidate');
    }

    goBack() {
        this._router.navigate(['List']);
    }

    onCancel() {
        // reload data for item model
        this._dataStorage.get(this.item);
        this.myForm._pristine = true;
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
        } else {
            // show not valid message
        }

        this.submitted = true;

        this.gotoList();

        console.log('onSubmit called');
    }


    filter() {
        console.log('filter with value: ' + this.searchValue);
    }

    gotoList() {
        this._router.navigate(['List', { id: this.id }]);
    }

    private getItem() {
        // this._AddressesApi.addressesAddressIdGet(this.id)
        //   .subscribe(
        //   item => this.item = item,
        //   error => this.errorMessage = <any>error
        //   );

        this.item = this._AddressesApiLocal.getAddressById(this.id);
        if (this.item.modifiedDate !== '') {
            let date = new Date(this.item.modifiedDate);
            let momentDate = this._moment;

            this.item.modifiedDate = momentDate.years(date.getFullYear()).months(date.getMonth()).dates(date.getDate()).format('YYYY-MM-DD');

            this._dataStorage.set(this.item);
        }
    }

    private formValidate() {
        this.myForm = this._formBuilder.group({
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
