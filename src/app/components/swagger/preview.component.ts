import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { ResourceComponent } from './resource.component';
import { SpecInfoComponent } from './spec-info.component';
import { PathComponent } from './path.component';


@Component({
  selector: 'preview',
  directives: [...ROUTER_DIRECTIVES, ResourceComponent, SpecInfoComponent,
    PathComponent],
  pipes: [MapToIterablePipe],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./swagger.component.css')],
  template: require('./preview.component.html')
})

export class PreviewComponent {
  @Input('model') model: any;
  specs: any;


  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Swagger Preview component');
    this.specs = this.model;
  }

}
