import {ControlGroup} from 'angular2/common';

export class ValidationService {
  static getValidatorErrorMessage(code: string, errorValue: any) {
    console.log('getValidatorErrorMessage code:' + code);
    // TODO: find out how to get more specific, like exact min or max length, and what if more than 1 control which has different requirements, how to do per control
    let config = {
      // built-in
      maxlength: 'Maximum length is ' + errorValue.requiredLength,
      minlength: 'Minimum length is ' + errorValue.requiredLength, // https://github.com/angular/angular/blob/master/modules/angular2/src/common/forms/validators.ts looking at the source code, we see the minlength error return object has info like requiredLength
      required: 'Required',

      // custom
      invalidCreditCard: 'Invalid credit card number',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
    };

    return config[code];
  }

  static creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return { 'invalidCreditCard': true };
    }
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  // UNDONE: how to pass in a value for a custom validator?
  static minLength(control, minLengthValue) {
    if (control.value.length >= minLengthValue) {
      return null;
    } else {
      return { 'minLength': true, minLengthValue: minLengthValue };
    }
  }

  // UNDONE: http://stackoverflow.com/questions/31788681/angular2-validator-which-relies-on-multiple-form-fields
  static matchingValuesValidator(control1Key: string, control2Key: string) {
    return (group: ControlGroup): { [key: string]: any } => {
      let control1 = group.controls[control1Key];
      let control2 = group.controls[control2Key];

      if (control1.value !== control2.value) {
        return {
          mismatchingValues: true
        };
      }
    }
  }

  // TODO: DATATYPE number, date, REAL WORLD TYPE zipcode, MULTIPLE/COMPARISON range, GENERIC/FORMAT regEx

}
