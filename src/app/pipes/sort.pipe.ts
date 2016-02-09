// https://plnkr.co/edit/DU6pxr?p=preview
import { Pipe } from "angular2/core";

@Pipe({
  name: "arraySort"
})
export class ArraySortPipe {

  transform(array: Array<string>, args: string): Array<string> {
    if (typeof args[0] === "undefined") {
      return array;
    }

    let direction = args[0][0];
    let column = args[0].slice(1);

    array.sort((a: any, b: any) => {

      let left = Number(new Date(a[column]));
      let right = Number(new Date(b[column]));

      return (direction === "-") ? right - left : left - right;
    });

    return array;
  }
}


//
// import { Component } from 'angular2/core';
// import { DatePipe } from "angular2/common";
// import { ArraySortPipe } from "./pipe";
//
// @Component({
//   selector: 'my-app',
//   providers: [],
//   pipes: [DatePipe, ArraySortPipe],
//   template: `
//     <ul>
//       <li *ngFor="#item of array | arraySort:'-date'">{{item.name}} {{item.date | date:'medium' }}</li>
//     </ul>
//   `,
//   directives: []
// })
// export class App {
//
//   array: Array<any> = [{
//     name: "John",
//     date: new Date('2005-12-17T03:24:00')
//   },
//   {
//     name: "Smith",
//     date: new Date('2008-12-17T03:24:00')
//   },
//   {
//     name: "Suzan",
//     date: new Date('2009-12-17T03:24:00')
//   }]
//
//   constructor() {}
// }
//
