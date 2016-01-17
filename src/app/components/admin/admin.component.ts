import {Component} from 'angular2/core';

@Component({
  selector: 'admin',
  directives: [],
  providers: [],
  pipes: [ ],
  styles: [ require('bootstrap/dist/css/bootstrap.min.css'), require('./admin.component.css') ],
  template: require('./admin.component.html')
})
export class AdminComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Admin component');
  }

}
