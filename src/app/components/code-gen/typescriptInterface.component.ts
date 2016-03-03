import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { ProperCasePipe } from '../../pipes/properCase.pipe';

@Component({
  selector: 'typescriptInterface',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [MapToIterablePipe, ProperCasePipe],
  styles: [],
  template: require('./typescriptInterface.component.html')
})

export class TypescriptInterfaceComponent {
  @Input('model') model: any;
  @Input('definitionName') _name: any;
  @Input('isCommentProperties') _isCommentProperties: boolean = true;


  _definition: any;

  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit code-gen component');
    this._definition = this.model;

       // TODO: an idea: this._model = new modelCodeGenMetaData(this.model);
  }
}
