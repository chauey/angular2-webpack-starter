import {Component} from 'angular2/core';

@Component({
  selector: 'dashboard',
  directives: [],
  providers: [],
  pipes: [ ],
  styles: [ require('./dashboard.css') ],
  template: require('./dashboard.html')
})
export class Dashboard {
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Dashboard component');
  }

}
