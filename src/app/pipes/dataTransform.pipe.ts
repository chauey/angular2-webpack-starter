import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'dataTransform', pure: false })
export class DataTransformPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    let arrayList = args.shift();

    if (arrayList && arrayList.length > 0) {
      let filter =  arrayList.filter(item => {
        return item[args[0]] == value;
      });

      return filter[0][args[1]];
    } else {
      return value;
    }
  }
}
