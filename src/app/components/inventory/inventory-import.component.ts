import {Component} from 'angular2/core';

@Component({
  selector: 'inventory-import',
  directives: [],
  providers: [],
  pipes: [ ],
  styles: [ require('./inventory-import.component.css') ],
  template: require('./inventory-import.component.html')
})
export class InventoryImport {
  // TypeScript public modifiers
  constructor() {

  }

  import() {
      console.log('import() called');
  }

  ngOnInit() {
    console.log('ngOnInit inventory-import component');
  }

}
