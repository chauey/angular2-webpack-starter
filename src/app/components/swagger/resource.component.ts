import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
// perhaps original backbone version added to the JSON data , like sumary.
// https://github.com/swagger-api/swagger-ui/blob/e549de222d6270a6bd19f8f30bb3cc618213b1f8/src/main/javascript/view/ResourceView.js

@Component({
  selector: 'resource',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [MapToIterablePipe],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./swagger.component.css')],
  template: require('./resource.component.html')
})

export class ResourceComponent {
  @Input('model') model: any;
  //swaggerDoc: any;
  id: any;
  name: any;
  summary: any;
  url: any;


  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Swagger Resource component');
    this.id = this.model.id;
    this.name = this.model.name;
    this.summary = this.model.summary;
    this.url = this.model.url;
  }

}
