import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { MainComponent } from './main.component';
import { PreviewComponent } from './preview.component';

// TODO: https://github.com/swagger-api/swagger-ui#localization-and-translation
@Component({
  selector: 'admin',
  directives: [...ROUTER_DIRECTIVES, MainComponent, PreviewComponent ],
  pipes: [MapToIterablePipe],
  styles: [require('./swagger.component.css')],
  template: require('./swagger.component.html')
})

export class SwaggerComponent implements OnInit {

  swaggerDoc: any;

  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Swagger component');
    // this.swaggerDoc = require('../../test/swaggerDocAdventureWorks.json');
    this.swaggerDoc = require('../../test/swaggerDocPetStoreFull.json');

  }

}
