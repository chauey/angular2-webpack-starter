import {Component} from 'angular2/core';

@Component({
  selector: 'dashboard',
  directives: [],
  providers: [],
  pipes: [ ],
  styles: [ require('./dashboard.component.css') ],
  template: require('./dashboard.component.html')
})
export class DashboardComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Dashboard component');
  }

}
