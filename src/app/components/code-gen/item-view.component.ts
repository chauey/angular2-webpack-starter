import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { ProperCasePipe } from '../../pipes/properCase.pipe';

@Component({
  selector: 'itemView',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [MapToIterablePipe, ProperCasePipe],
  styles: [],
  //template: require('./item-view.component.html')
  template: htmlEscapeStrings
    `<div class="container">
  <form (ngSubmit)="onSubmit()" #addressItemForm="ngForm" *ngIf="item" [ngFormModel]="myForm">

    ${'<template ngFor #propertyKeyValuePair [ngForOf]="_definition.properties| mapToIterable">'}
      <div class="form-group">
        <label for="{{propertyKeyValuePair.key}}">{{propertyKeyValuePair.key}}</label>
        <input id="{{propertyKeyValuePair.key}}" ngControl="{{propertyKeyValuePair.key}}" type="text" class="form-control" [(ngModel)]="item.{{propertyKeyValuePair.key}}">
        <validation-message control="{{propertyKeyValuePair.key}}"></validation-message>
      </div>
    ${'</template>'}

    <div *ngIf="!myForm.valid" class="ui error message">Form is invalid</div>
    <button type="submit" [disabled]="!addressItemForm.form.valid" class="btn btn-primary">Submit</button>
    <button type="button" class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
</div>`
})

export class ItemViewComponent {
  @Input('model') model: any;
  @Input('definitionName') _name: any;
  @Input('isCommentProperties') _isCommentProperties: boolean = true;


  _definition: any;

  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit item-view component');
    this._definition = this.model;

    // TODO: an idea: this._model = new modelCodeGenMetaData(this.model);
  }

  // https://app.pluralsight.com/player?course=es6-with-typescript&author=steve-ognibene&name=es6-with-typescript-m2&clip=12&mode=live
  friend(strings: string[], ...substitutions: string[]) {
    return this.processTaggedTemplate(strings, substitutions);
  }

  processTaggedTemplate(strings: string[], substitutions: string[]) {
    const result = [];
    substitutions.forEach((sub, index) => {
      result.push(strings[index], sub);
    });
    result.push(strings[strings.length - 1]);
    return result.join('');
  }
}

// https://app.pluralsight.com/player?course=es6-with-typescript&author=steve-ognibene&name=es6-with-typescript-m2&clip=12&mode=live
function htmlEscapeStrings(strings: string[], ...substitutions: string[]) {
  return processTaggedTemplate(strings, substitutions);
}

function processTaggedTemplate(strings: string[], substitutions: string[]) {
  const result = [];
  substitutions.forEach((sub, index) => {
    result.push(htmlEscape(strings[index]), sub);
  });
  result.push(htmlEscape(strings[strings.length - 1]);
  return result.join('');
}

// http://stackoverflow.com/questions/1219860/html-encoding-in-javascript-jquery
function htmlEscape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function htmlUnescape(value) {
  return String(value)
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}
