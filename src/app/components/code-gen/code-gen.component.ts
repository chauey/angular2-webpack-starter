import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';

import { TypescriptInterfaceComponent } from './typescriptInterface.component';


@Component({
  selector: 'codeGen',
  directives: [...ROUTER_DIRECTIVES, TypescriptInterfaceComponent],
  pipes: [MapToIterablePipe],
  styles: [],
  template: require('./code-gen.component.html')
})

export class CodeGenComponent {
  @Input('model') model: any;
  _specs: any;


  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit code-gen component');
    this._specs = this.model;

       this._specs = require('../../test/swaggerDocPetStoreFull.json');
  }

}
