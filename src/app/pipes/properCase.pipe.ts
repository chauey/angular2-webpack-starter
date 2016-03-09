import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'properCase', pure: false })
export class ProperCasePipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    console.log(value);
    return value.replace(/(?:^|\s)([a-z])/, function(firstLetter) {
      return firstLetter.toUpperCase();
    }); //value;
  }
}
