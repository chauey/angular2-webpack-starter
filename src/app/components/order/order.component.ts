import {Component} from 'angular2/core';

@Component({
  selector: 'order',
  directives: [],
  providers: [],
  pipes: [ ],
  styles: [ require('./order.component.css') ],
  template: require('./order.component.html')
})
export class OrderComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit order component');
  }

}
