import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';



@Component({
  selector: 'codeGen',
  directives: [...ROUTER_DIRECTIVES, ResourceComponent, SpecInfoComponent,
    PathComponent, SecurityComponent, TagsComponent],
  pipes: [MapToIterablePipe],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./swagger.component.css')],
  template: require('./code-gen.component.html')
})

export class CodeGenComponent {
  @Input('model') model: any;
  specs: any;


  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit code-gen component');
    this.specs = this.model;
  }

}
