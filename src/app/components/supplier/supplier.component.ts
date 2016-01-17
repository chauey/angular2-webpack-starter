import {Component} from 'angular2/core';

@Component({
  selector: 'dashboard',
  directives: [],
  providers: [],
  pipes: [ ],
  styles: [ require('bootstrap/dist/css/bootstrap.min.css'), require('./supplier.component.css') ],
  template: require('./supplier.component.html')
})
export class Dashboard {
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Dashboard component');
  }

}
