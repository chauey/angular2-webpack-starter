import {Component} from 'angular2/core';
declare var marked: any;

@Component({
    selector: 'markdown',
    template: '<div class="markdown" [innerHTML]="process(md)"></div>',
    inputs: ['md']
})
export class MarkdownComponent {
    md: string;

    process(s: string) {
        if (!s) return '';
        return marked(s);
    }
}
