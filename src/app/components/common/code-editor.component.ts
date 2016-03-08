import {Component, EventEmitter} from "angular2/core";
import {AceEditorDirective} from "./ace-editor.directive";

@Component({
  selector: "code-editor",
  directives: [AceEditorDirective],
  template: `<div>
      <ace-editor id="editor" [text]="code" (textChanged)="onCodeChanged()"></ace-editor>
    </div>
    `,
  inputs: [
    "code"
  ],
  styles: [`#editor {
  display:block;
  height:200px;
}
mit-editor {
  display:block;
  height:300px;
}`]
})
export class CodeEditorComponent {
  public code: string;

  constructor() {
    this.code = "";
  }

  public onCodeChanged(code: string) {
    this.code = code;
  }
}
