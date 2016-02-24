import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { OperationComponent } from './operation.component';


@Component({
  selector: 'path',
  directives: [...ROUTER_DIRECTIVES, OperationComponent],
  pipes: [MapToIterablePipe],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./swagger.component.css')],
  template: require('./path.component.html')
})

export class PathComponent {
  @Input('model') model: any;
  @Input('name') pathName: string;

  //swaggerDoc: any;
  path: any;


  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Swagger Path component');
    this.path = this.model;
  }

}
