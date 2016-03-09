import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';

import { CodeEditorComponent } from '../common/code-editor.component';

import { TypescriptInterfaceComponent } from './typescriptInterface.component';
import { ItemViewComponent } from './item-view.component';

@Component({
  selector: 'codeGen',
  directives: [...ROUTER_DIRECTIVES, TypescriptInterfaceComponent, ItemViewComponent, CodeEditorComponent],
  pipes: [MapToIterablePipe],
  styles: [],
  template: require('./code-gen.component.html')
})

export class CodeGenComponent {
  @Input('model') model: any;
  _specs: any;
  markdown: string;

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit code-gen component');
    this._specs = this.model;

    this._specs = require('../../test/swaggerDocPetStoreFull.json');

    this.markdown = '*testing editor value';

  }
}
