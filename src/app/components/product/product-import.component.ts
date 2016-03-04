import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from 'angular2/common';

import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload/ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'product-import',
  directives: [NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES, FILE_UPLOAD_DIRECTIVES],
  providers: [],
  pipes: [],
  styles: [require('./product-import.component.css')],
  template: require('./product-import.component.html')
})

export class ProductImportComponent implements OnInit {

  private uploader: FileUploader = new FileUploader({ url: URL });
  private hasBaseDropZoneOver: boolean = false;
  private hasAnotherDropZoneOver: boolean = false;

  constructor() {

  }

  import() {
    console.log('import() called');
  }

  ngOnInit() {
    console.log('ngOnInit product-import component');
  }

  private fileOverBase(e: any) {
    this.hasBaseDropZoneOver = e;
  }

  private fileOverAnother(e: any) {
    this.hasAnotherDropZoneOver = e;
  }



}
