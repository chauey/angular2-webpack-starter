import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from 'angular2/common';

import {FILE_UPLOAD_DIRECTIVES, FileUploader} from '../../../../node_modules/ng2-file-upload/ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'inventory-import',
  directives: [NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES, FILE_UPLOAD_DIRECTIVES],
  providers: [],
  pipes: [ ],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'),  require('./inventory-import.component.css') ],
  template: require('./inventory-import.component.html')
})
export class InventoryImport {

  private uploader:FileUploader = new FileUploader({url: URL});
  private hasBaseDropZoneOver:boolean = false;
  private hasAnotherDropZoneOver:boolean = false;

  private fileOverBase(e:any) {
    this.hasBaseDropZoneOver = e;
  }

  private fileOverAnother(e:any) {
    this.hasAnotherDropZoneOver = e;
  }
  
  constructor() {

  }

  import() {
      console.log('import() called');
  }

  ngOnInit() {
    console.log('ngOnInit inventory-import component');
  }

}
