import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { MarkdownComponent } from '../common/markdown.component';

@Component({
  selector: 'operation',
  directives: [...ROUTER_DIRECTIVES, MarkdownComponent],
  pipes: [MapToIterablePipe],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./swagger.component.css')],
  template: require('./operation.component.html')
})

export class OperationComponent {
  @Input('model') model: any;
  @Input('name') operationName: string;
  @Input('path') path: any;
  @Input('pathName') pathName: string;

  //swaggerDoc: any;
  operation: any;

  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit Swagger Operation component');
    this.operation = this.model;
  }

  /*
      * Gets all available parameters
      *
      * @returns {array} - array of parameters
    */
  getParameters() {
    // https://www.reindex.io/blog/you-might-not-need-underscore/ used this to help figure out how to convert from underscore/lodash to ES6
        var hasPathParameter = Array.isArray(this.path.parameters);//_.isArray(this.path.parameters);
        var hasOperationParameter = Array.isArray(this.operation.parameters);
        var operationParameters = this.operation.parameters;
        var pathParameters = this.path.parameters;

        // if there is no operation and path parameter return empty array
        if (!hasOperationParameter && !hasPathParameter) {
          return [];
        }

        // if there is no operation parameter return only path parameters
        if (!hasOperationParameter) {
          operationParameters = [];
        }

        // if there is no path parameter return operation parameters
        if (!hasPathParameter) {
          pathParameters = [];
        }

        // if there is both path and operation parameters return all of them
        return operationParameters.concat(pathParameters)
          .map(this.setParameterSchema);
      };

      // Naive method: Returning a new object with selected properties
// Object.prototype.pick = function(arr) {
//     var _this = this;
//     var obj = {};
//     arr.forEach(function(key){
//         obj[key] = _this[key];
//     });

//     return obj;
// };
       /*
       * Sets the schema object for a parameter even if it doesn't have schema
       *
       * @param {object} parameter
       * @returns {object}
      */
      setParameterSchema(parameter) {
        if (parameter.schema) {
          return parameter;

        } else if (parameter.type === 'array') {
          parameter.schema = null; // UNDONE://_.pick(parameter, 'type', 'items');

        } else {
          var schema = {type: parameter.type};

          if (parameter.format) {
            schema.format = parameter.format;
          }

          parameter.schema = schema;
        }

        // if allowEmptyValue is explicitly set to false it means this parameter
        // is required for making a request.
        if (parameter.allowEmptyValue === false) {
          parameter.schema.required = true;
        }

        return parameter;
      }


      /*
       * Returns true if the operation responses has at least one response with
       * schema
       *
       * @param responses {object} - a hash of responses
       * @returns boolean
      */
      hasAResponseWithSchema(responses) {
        return Object.keys(responses).some(function (responseCode) {
          return responses[responseCode] && responses[responseCode].schema;
        });
      };

      /*
       * Returns true if the operation responses has at least one response with
       * "headers" field
       *
       * @param responses {object} - a hash of responses
       * @returns boolean
      */
      hasAResponseWithHeaders (responses) {
        return Object.keys(responses).some(function (responseCode) {
          return responses[responseCode] && responses[responseCode].headers;
        });
      };

      /*
       * Returns true if the operation responses has at least one response with
       * examples
       *
       * @param responses {object} - a hash of responses
       * @returns boolean
      */
      hasAResponseWithExamples (responses) {
        return Object.keys(responses).some(function (responseCode) {
          return responses[responseCode] && responses[responseCode].examples;
        });
      };

}
