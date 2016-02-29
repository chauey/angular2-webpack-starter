import {Component, OnInit, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { MarkdownComponent } from '../common/markdown.component';

// UNDONE: import { JSONFormatter } from 'json-formatter-js/dist/bundle'


@Component({
  selector: 'schema-model',
  directives: [...ROUTER_DIRECTIVES, MarkdownComponent],
  pipes: [MapToIterablePipe],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./swagger.component.css')],
  template: require('./schema-model.component.html')
})

export class SchemaModelComponent implements OnInit {
  @Input('model') model: any;
  _schema: any;


  // https://github.com/mohsen1/json-schema-view-js js version // also an ng1 version bower install json-schema-view-js --save
  // https://github.com/mohsen1/json-formatter-js js version // https://github.com/mohsen1/json-formatter Angular 1 version  npm install --save json-formatter-js

  constructor() { //private _jsonFormatter: JSONFormatter, private jsonSchemaView: JSONSchemaView) {

  }

  ngOnInit() {
    console.log('ngOnInit Swagger Schema Model component');
    this._schema = this.model;
  }

  _mode: string = 'schema';

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


  render() {
    let formatter = new JSONFormatter($scope.schema, 1);
    $element.find('td.view.json').html(formatter.render());

    let schemaView = new JSONSchemaView($scope.schema, 1);
    $element.find('td.view.schema').html(schemaView.render());
  }

}
