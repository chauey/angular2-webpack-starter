import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { ResourceComponent } from './resource.component';


@Component({
  selector: 'main',
  directives: [...ROUTER_DIRECTIVES, ResourceComponent],
  pipes: [MapToIterablePipe],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./swagger.component.css')],
  template: require('./main.component.html')
})

export class MainComponent {
  @Input('model') model: any;
  //swaggerDoc: any;
  basePath: any;
  externalDocs: any;
  info: any;


  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Swagger Main component');
    this.basePath = this.model.basePath;
    this.externalDocs = this.model.externalDocs;
    this.info = this.model.info;
  }

}
