import {Component} from 'angular2/core';

@Component({
  selector: 'company-profile',
  directives: [],
  providers: [],
  pipes: [ ],
  styles: [ require('bootstrap/dist/css/bootstrap.min.css'), require('./company-profile.component.css') ],
  template: require('./company-profile.component.html')
})
export class CompanyProfileComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit company profile component');
  }

}
