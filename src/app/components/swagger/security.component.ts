import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { MarkdownComponent } from '../common/markdown.component';


@Component({
  selector: 'security',
  directives: [...ROUTER_DIRECTIVES, MarkdownComponent],
  pipes: [MapToIterablePipe],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./swagger.component.css')],
  template: require('./security.component.html')
})

export class SecurityComponent {
  @Input('model') model: any;
  specs: any;

  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Swagger Security component');
    this.specs = this.model;
  }

}
