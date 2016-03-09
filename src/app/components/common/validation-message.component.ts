import {Component, Host, Input} from 'angular2/core';
import {NgFormModel} from 'angular2/common';
import {ValidationService} from '../../services/validation.service';

@Component({
  selector: 'validation-message',
  // inputs: ['controlName: control'], did not seem to work
  template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ValidationMessageComponent {
  //@Input() public control: string; other way more flexible
  @Input('control') controlName: string; // https://angular.io/docs/ts/latest/api/core/Input-var.html

  // @host essentially forces this to get from host component, not any further any ancestor
  // https://coryrylan.com/blog/angular-2-form-builder-and-validation-management
  // http://blog.thoughtram.io/angular/2015/08/20/host-and-visibility-in-angular-2-dependency-injection.html
  constructor( @Host() private _formDir: NgFormModel) {
    console.log(_formDir);
  }

  get errorMessage() {
    let control = this._formDir.form.find(this.controlName);

    for (let propertyName in control.errors) {
      if (control.errors.hasOwnProperty(propertyName) && control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, control.errors[propertyName]);
      }
    }

    return null;
  }
}
