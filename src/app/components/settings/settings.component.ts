import {Component} from 'angular2/core';

@Component({
  selector: 'settings',
  directives: [],
  providers: [],
  pipes: [],
  styles: [require('./settings.component.css')],
  template: require('./settings.component.html')
})
export class SettingsComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit settings component');
  }

}
