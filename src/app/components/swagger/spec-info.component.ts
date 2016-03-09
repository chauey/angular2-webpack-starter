import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { MarkdownComponent } from '../common/markdown.component';


@Component({
  selector: 'specInfo',
  directives: [...ROUTER_DIRECTIVES, MarkdownComponent],
  pipes: [MapToIterablePipe],
  styles: [require('./swagger.component.css')],
  template: require('./spec-info.component.html')
})

export class SpecInfoComponent {
  @Input('model') model: any;
  //swaggerDoc: any;
  specs: any;


  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Swagger SpecInfo component');
    this.specs = this.model;
  }

}
