//https://github.com/angular/angular/issues/2246
//<div *ng-for="#value of object | values"> </div>
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'values', pure: false })
export class ValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}
