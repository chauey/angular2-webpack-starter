// angular 2
import {Component, Host, Input, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

// providers

// pipes
import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';

// components
import { PathComponent } from './path.component';
import { ResourceComponent } from './resource.component';
import { SchemaModelComponent } from './schema-model.component';
import { SecurityComponent } from './security.component';
import { SpecInfoComponent } from './spec-info.component';
import { TagsComponent } from './tags.component';

// component decorator, directives, pipes, providers, selector, styles, template
@Component({
  directives: [...ROUTER_DIRECTIVES, ResourceComponent, SpecInfoComponent, PathComponent, SecurityComponent, TagsComponent, SchemaModelComponent],
  pipes: [MapToIterablePipe],
  providers: [],
  selector: 'preview',
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./swagger.component.css')],
  template: require('./preview.component.html')
})
// export and class
export class PreviewComponent implements OnInit {
  // input/output
  @Input('model') _model: any;

  // member properties
  _specs: any;

  // constructor
  constructor() {

  }

  // lifecycle events
  ngOnInit() {
    console.log('ngOnInit Swagger Preview component');
    this._specs = this._model;
  }

  // methods
  showDefinitions(definitions) {
    debugger;
    console.log("typeof definitions === 'object': " + typeof definitions === 'object');
    return (typeof definitions === 'object');
  }

  /**
 * Determines if a key is a vendor extension key
 * Vendor extensions always start with `x-`
 *
 * @param {string} key
 *
 * @returns {boolean}
*/
  isVendorExtension(key) {
    // return _.startsWith(key, 'x-');
    return key.startsWith('x-');
  }
}
