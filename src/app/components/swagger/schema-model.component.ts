import {Component, OnInit, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { MarkdownComponent } from '../common/markdown.component';

// UNDONE: may need to create "typing file", definition d.ts ambient file since this library does not seem to have,
// and it's not on the definitely typed site. https://github.com/DefinitelyTyped/DefinitelyTyped
// http://www.typescriptlang.org/Handbook https://typescript.codeplex.com/wikipage?title=Writing%20Definition%20%28.d.ts%29%20Files
// http://stackoverflow.com/questions/12687779/how-do-you-produce-a-d-ts-typings-definition-file-from-an-existing-javascript
// UNDONE: import { JSONFormatter } from 'json-formatter-js/dist/bundle'
//import * as JSONFormatter from 'json-formatter-js/src/index';

//import JSONFormatter = require('json-formatter-js');
// UNDONE: import { JSONFormatter } from 'json-formatter-js';

@Component({
  selector: 'schema-model',
  directives: [...ROUTER_DIRECTIVES, MarkdownComponent],
  pipes: [MapToIterablePipe],
  styles: [require('./swagger.component.css')],
  template: require('./schema-model.component.html')
})

export class SchemaModelComponent implements OnInit {
  @Input('model') model: any;
  _schema: any;
  // _jsonFormatter: JSONFormatter;
  _jsonHtml: string;
  _mode: string = 'schema';


  // https://github.com/mohsen1/json-schema-view-js js version // also an ng1 version bower install json-schema-view-js --save
  // https://github.com/mohsen1/json-formatter-js js version // https://github.com/mohsen1/json-formatter Angular 1 version  npm install --save json-formatter-js

  constructor() { //private _jsonFormatter: JSONFormatter) { //, private jsonSchemaView: JSONSchemaView) {
  }

  ngOnInit() {
    console.log('ngOnInit Swagger Schema Model component');
    this._schema = this.model;

    //let jsonFormatter = new JSONFormatter(this._schema, 1);
    // this._jsonFormatter = jsonFormatter;
    //this._jsonHtml = jsonFormatter.render();
  }

  switchMode() {
    this._mode = this._mode === 'json' ? 'schema' : 'json';
  };

  // $scope.$watch('schema', render);

  // render();

  // function render() {
  //   var formatter = new JSONFormatter($scope.schema, 1);
  //   $element.find('td.view.json').html(formatter.render());

  //   var schemaView = new JSONSchemaView($scope.schema, 1);
  //   $element.find('td.view.schema').html(schemaView.render());
  // }


  // render() {
  //   let formatter = new JSONFormatter(this._schema, 1);
  //   $element.find('td.view.json').html(formatter.render());

  //   let schemaView = new JSONSchemaView($scope.schema, 1);
  //   $element.find('td.view.schema').html(schemaView.render());
  // }

}
