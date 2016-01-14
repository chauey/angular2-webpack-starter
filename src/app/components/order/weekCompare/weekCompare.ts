
/*
 * Angular 2
 */
import {Component}
  from 'angular2/core';
import {FORM_DIRECTIVES}
  from 'angular2/common';
import {Http}
  from 'angular2/http';

// import { Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES }
//   from 'angular2/angular2';
// import {ROUTER_DIRECTIVES}
//   from 'angular2/router';

// Use webpack's `require` to get files as a raw string using raw-loader
let styles = require('./weekCompare.css');
let template = require('./weekCompare.html');


// Simple external file component example
@Component({
    selector: 'weekCompare'
// })
// @View({
    , directives: [
        // Angular's core directives
        // CORE_DIRECTIVES,

        // // Angular's form directives
        // FORM_DIRECTIVES,

        // // Angular's router
        // ROUTER_DIRECTIVES,
    ],
    // include our .html and .css file
    styles: [styles],
    template: template
})

export class WeekCompare {
    constructor() {

    }

    testProperty: any = 'pppppppppppppppppppp';

    vendorCompareData: any =
     {
        baseTime: 'Jun-1',
        compareTime: 'Jun-8',
        itemComparisons:
        [
            {
                item: 'item1',
                vendorItemComparison:
                [
                    {
                        vendor: 'Sysco',
                        base: 1.00, compare: 1.01
                    },
                    {
                        vendor: 'US Food Service',
                        base: 1.00, compare: .99
                    }
                ]
            }
        ]
    };

    vendorCompareData2: any =

       [
            { itemId: 1,
                price: 1,
                price2: 2
            },
            { itemId: 2,
                price: 1,
                price2: 2
            },
            { itemId: 3,
                price1: 1,
                price2: 2
            }
        ]
    ;
}
