// http://stackoverflow.com/questions/31490713/iterate-over-typescript-dictionary-in-angular-2
// <div *ngFor="#keyValuePair of someObject | mapToIterable">
//   This is the key {{keyValuePair.key}} and this is the value {{keyValuePair.val}}.
// </div>
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe {
  transform(dict: Object): any { // dna: Array
    var a = [];
    for (var key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({ key: key, value: dict[key] });
      }
    }
    return a;
  }
}
