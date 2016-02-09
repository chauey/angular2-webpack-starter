import {Pipe, PipeTransform} from 'angular2/core';

import { DataService } from '../services/DataService';

/*
 * lalal
*/
@Pipe({ name: 'entityFieldValue' })
export class EntityFieldValuePipe implements PipeTransform {
  constructor(private _dataService: DataService) {
  }

  transform(value: number, args: string[]): any {
    console.log('value: ' + value);
    console.log('args[0]: ' + args[0]);
    console.log('args[1]: ' + args[1]);

    //     let dict = {};
    //     json.forEach(function(x) {
    //         dict[x.id] = x
    //     });

    //  retrun dict[value];

    return this._dataService[args[0]][value][args[1]]; //"Math.pow(value, parseInt(args[0] || '1', 10))";
    //
    //
    //     var result = restaurants.filter(function (chain) {
    //     return chain.restaurant.food === "chicken";
    // })[0].restaurant.name;
  }
}
