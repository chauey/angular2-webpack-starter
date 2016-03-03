import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { MarkdownComponent } from '../common/markdown.component';

import { AuthManager } from '../../services/auth-manager.service';

@Component({
  selector: 'tryOperation',
  directives: [...ROUTER_DIRECTIVES, MarkdownComponent],
  pipes: [MapToIterablePipe],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./swagger.component.css')],
  template: require('./try-operation.component.html')
})

export class TryOperationComponent {
  @Input('model') model: any;
  @Input('name') operationName: string;
  @Input('path') path: any;
  @Input('pathName') pathName: string;

  @Input('getParameters') getParameters: () => void;



  @Input('specs') specs: any;

  //swaggerDoc: any;
  operation: any;
  enableTryIt: boolean = true;
  isTryOpen: boolean = false;


  requestModel: any;
  requestSchema: any;
  parameters: any;
  securityOptions: any;

  FILE_TYPE = ' F I L E '; // File key identifier for file types

  constructor(private authManager: AuthManager) {
    console.log(this.operationName);

    let blah = authManager;
  }


  ngOnInit() {
    console.log('ngOnInit Swagger Try Operation component');
    this.operation = this.model;
    // UNDONE:
    this.parameters = this.getParameters();
    this.securityOptions = this.getSecurityOptions();


    this.configureSchemaForm();

    // Deeply watch specs for updates to regenerate the from
    // $scope.$watch('specs', function () {
    this.requestModel = this.makeRequestModel();
    this.requestSchema = this.makeRequestSchema();
    // }, true);



    //SchemaForm.options = defaultOptions;
  }



  // let parameters = $scope.getParameters();
  // let securityOptions = getSecurityOptions();
  // let FILE_TYPE = ' F I L E '; // File key identifier for file types

  // binds to $scope
  xhrInProgress = false;

  // httpProtocol is static for now we can use HTTP2 later if we wanted
  httpProtocol = 'HTTP/1.1';
  locationHost = window.location.host;

  error = null;

  // configureSchemaForm();

  // // Deeply watch specs for updates to regenerate the from
  // // $scope.$watch('specs', function () {
  // //   $scope.requestModel = makeRequestModel();
  // //   $scope.requestSchema = makeRequestSchema();
  // // }, true);

  // JSON Editor options
  defaultOptions = {
    theme: 'bootstrap3',           // jshint ignore:line
    remove_empty_properties: true, // jshint ignore:line
    show_errors: 'change'          // jshint ignore:line
  };

  looseOptions = {
    no_additional_properties: false, // jshint ignore:line
    disable_properties: false,       // jshint ignore:line
    disable_edit_json: false         // jshint ignore:line
  };

  // SchemaForm.options = defaultOptions;



  /*
   * configure SchemaForm directive based on request schema
  */
  configureSchemaForm() {

    // Determine if this request has a loose body parameter schema
    // A loose body parameter schema is a body parameter that allows additional
    // properties or has no properties object
    //
    // Note that "loose schema" is not a formal definition, we use this
    // definition here to determine type of form to render
    let loose = false;

    // loose schema is only for requests with body parameter
    if (!this.hasRequestBody()) {
      loose = false;

    } else {
      // we're accessing deep in the schema. many operations can fail here
      try {

        for (let p in this.requestSchema.properties.parameters.properties) {
          let param = this.requestSchema.properties.parameters.properties[p];
          if (param.in === 'body' && this.isLooseJSONSchema(param)) {
            loose = true;
          }
        }
      } catch (e) { }
    }

    // SchemaForm.options = _.extend(defaultOptions, loose ? this.looseOptions : {});
  }

  /*
   * Determines if a JSON Schema is loose
   *
   * @param {object} schema - A JSON Schema object
   *
   * @returns {boolean}
  */
  isLooseJSONSchema(schema) {

    // loose object
    if (schema.additionalProperties || !schema.properties) {// UNDONE: _.isEmpty(schema.properties)) {
      return true;
    }

    // loose array of objects
    if (
      schema.type === 'array' &&
      (schema.items.additionalProperties ||
        !schema.items.properties)
      // UNDONE: _.isEmpty(schema.items.properties))
    ) {

      return true;
    }

    return false;
  }

  /*
   * Appends JSON Editor options for schema recursively so if a schema needs to
   * be edited by JSON Editor loosely it's possible
   *
   * @param {object} schema - A JSON Schema object
   *
   * @returns {object} - A JSON Schema object
  */
  appendJSONEditorOptions(schema) {
    let looseOptions = {
      no_additional_properties: false, // jshint ignore:line
      disable_properties: false,       // jshint ignore:line
      disable_edit_json: false         // jshint ignore:line
    };

    // If schema is loose add options for JSON Editor
    if (this.isLooseJSONSchema(schema)) {
      schema.options = looseOptions;
    }

    // UNDONE: _.each(schema.properties, this.appendJSONEditorOptions);
    schema.properties.forEach(this.appendJSONEditorOptions);


    return schema;
  }

  /*
   * Makes the request schema to generate the form in the template
   * The schema has all required attributes for making a call for this operation
   *
   * @returns {object} - A JSON Schema containing all properties required to
   *   make this call
  */
  makeRequestSchema() {

    // base schema
    let schema = {
      type: 'object',
      title: 'Request',
      required: ['scheme', 'accept'],
      properties: {
        scheme: {
          type: 'string',
          title: 'Scheme',

          // Add schemes
          enum: this.walkToProperty('schemes')
        },
        accept: {
          type: 'string',
          title: 'Accept',

          // All possible Accept headers
          enum: this.walkToProperty('produces')
        }
      }
    };

    // Only if there is a security definition add security property
    if (this.securityOptions.length) {
      schema.properties.security = {
        title: 'Security',
        description: 'Only authenticated security options are shown.',
        type: 'array',
        uniqueItems: true,
        items: {
          type: 'string',

          // All security options
          enum: this.securityOptions
        }
      };
    }

    // Add Content-Type header only if this operation has a body parameter
    if (this.hasRequestBody()) {
      let defaultConsumes = [
        'multipart/form-data',
        'x-www-form-urlencoded',
        'application/json'
      ];
      schema.properties.contentType = {
        type: 'string',
        title: 'Content-Type',
        enum: this.walkToProperty('consumes') || defaultConsumes
      };
    }

    // Only if there is a parameter add the parameters property
    if (this.parameters.length) {
      schema.properties.parameters = {
        type: 'object',
        title: 'Parameters',
        properties: {}
      };

      // Add a new property for each parameter
      this.parameters.map(this.pickSchemaFromParameter).map(this.normalizeJSONSchema)
        .forEach(function(paramSchema) {

          // extend the parameters property with the schema
          schema.properties.parameters
            .properties[paramSchema.name] = paramSchema;
        });
    }

    return schema;
  }

  /*
   * Makes a model with empty values that conforms to the JSON Schema generated
   *   by makeRequestSchema.
   *
   * @returns {object} - the model
  */
  makeRequestModel() {

    // base model
    let model = {

      // Add first scheme as default scheme
      scheme: this.walkToProperty('schemes')[0],

      // Default Accept header is the first one
      accept: this.walkToProperty('produces')[0]
    };

    // if there is security options add the security property
    if (this.securityOptions.length) {
      model.security = this.securityOptions;
    }

    // Add Content-Type header only if this operation has a body parameter
    if (this.hasRequestBody()) {

      // Default to application/json
      model.contentType = 'application/json';
    }

    // Only if there is a parameter add the parameters default values
    if (this.parameters.length) {
      model.parameters = {};
      this.parameters.map(this.pickSchemaFromParameter).map(() => this.normalizeJSONSchema)
        .forEach(function(paramSchema) {
          let defaults = {
            object: {},
            array: [],
            integer: 0,
            string: ''
          };

          // if default value is provided use it
          // UNDONE: if (angular.isDefined(paramSchema.default)) {
          if (paramSchema.default) {
            model.parameters[paramSchema.name] = paramSchema.default;

            // if there is no default value but there is minimum or maximum use them
            //} else if (angular.isDefined(paramSchema.minimum)) {
          } else if (paramSchema.minimum) {
            model.parameters[paramSchema.name] = paramSchema.minimum;
            //} else if (angular.isDefined(paramSchema.maximum)) {
          } else if (paramSchema.maximum) {
            model.parameters[paramSchema.name] = paramSchema.maximum;

            // if there is no default value select a default value based on type
            //} else if (angular.isDefined(defaults[paramSchema.type])) {
          } else if (defaults[paramSchema.type]) {

            let title = paramSchema.name || paramSchema.name;

            if (paramSchema.type === 'object') {
              model.parameters[title] = this.createEmptyObject(paramSchema);
            } else {
              model.parameters[title] = defaults[paramSchema.type];
            }

            // use empty string as fallback
          } else {
            model.parameters[paramSchema.name] = '';
          }
        });
    }

    return model;
  }

  /*
   * Fills in empty gaps of a JSON Schema. This method is mostly used to
   * normalize JSON Schema objects that are abstracted from Swagger parameters
   *
   * @param {object} - JSON Schema
   *
   * @returns {object} - Normalized JSON Schema
  */
  normalizeJSONSchema(schema) {

    // provide title property if it's missing.
    if (!schema.title && typeof schema.name === 'string') {// UNDONE: angular.isString(schema.name)) {
      schema.title = schema.name;
    }

    // if schema is missing the "type" property fill it in based on available
    // properties
    if (!schema.type) {

      // it's an object if it has "properties" property
      if (schema.properties) {
        schema.type = 'object';
      }

      // it's an array if it has "items" property
      if (schema.items) {
        schema.type = 'array';
      }
    }

    // Swagger extended JSON Schema with a new type, file. If we see file type
    // we will add format: file to the schema so the form generator will render
    // a file input
    if (schema.type === 'file') {
      schema.type = 'string';
      schema.format = 'file';
    }

    return () => this.appendJSONEditorOptions(schema);
  }

  /*
   * Because some properties are cascading this walks up the tree to get them
   *
   * @param {string} propertyName
   *
   * @retusn {array|undefined} - list of possible properties
  */
  walkToProperty(propertyName) {
    let defaultProperties = {
      produces: ['*/*'],
      schemes: ['http']
    };

    if (Array.isArray(this.operation[propertyName])) {
      return this.operation[propertyName];
    } else if (Array.isArray(this.specs[propertyName])) {
      return this.specs[propertyName];
    }

    // By default return the default property if it exists
    if (defaultProperties[propertyName]) {
      return defaultProperties[propertyName];
    }

    return undefined;
  }

  /*
   * Walks up the Swagger tree to find all possible security options
   *
   * @returns {array} - a list of security options or an empty array
  */
  getSecurityOptions() {
    let securityOptions = [];

    // operation level securities
    if (Array.isArray(this.operation.security)) {
      this.operation.security.map(function(security) {
        Object.keys(security).forEach(function(key) {
          securityOptions = securityOptions.concat(key);
        });
      });

      // root level securities
    } else if (Array.isArray(this.specs.security)) {
      this.specs.security.map(function(security) {
        Object.keys(security).forEach(function(key) {
          securityOptions = securityOptions.concat(key);
        });
      });
    }

    // UNDONE: return _.unique(securityOptions).filter(function (security) {
    //http://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array
    return securityOptions.unique().filter(
      // only return authenticated options
      (security) => this.authManager.securityIsAuthenticated(security)
      // function(security) {
      //   // only return authenticated options
      //   return this.authManager.securityIsAuthenticated(security);
      // }
    );
  }

  /*
   * Picks JSON Schema from parameter
   * Since the parameter is a subset of JSON Schema we need to add
   * the missing properties
   *
   * @param {object} parameter - the parameter
   * @returns {object} - the schema
  */
  pickSchemaFromParameter(parameter) {

    // if parameter has a schema populate it into the parameter so the parameter
    // has all schema properties
    if (parameter.schema) {
      Object.assign(parameter, parameter.schema);
      if (parameter.schema) {
        delete parameter.schema;
      }
      return parameter;

      //return Object.assign(parameter, parameter.schema), 'schema';
      //return null; // UNDONE: return _.omit(_.extend(parameter, parameter.schema), 'schema');

      // if parameter does not have a schema, use the parameter itself as
      // schema.
    } else {
      return parameter;
    }
  }

  /*
   * Creates empty object from JSON Schema
   *
   * @param {object} schema - JSON Schema
   *
   * @returns {object} - result (empty object based on the schema)
  */
  createEmptyObject(schema) {
    if (schema.type !== 'object') {
      throw new TypeError('schema should be an object schema.');
    }

    // TODO: expand this list
    let defaultValues = {
      string: '',
      integer: 0
    };

    let result = {};

    // If schema has no properties (loose schema), return the empty object
    if (!schema.properties) {
      return result;
    }

    Object.keys(schema.properties).forEach(function(propertyName) {

      // if this property is an object itself, recurse
      if (schema.properties[propertyName].type === 'object') {
        result[propertyName] =
          this.createEmptyObject(schema.properties[propertyName]);

        // otherwise use the defaultValues hash
      } else {
        result[propertyName] =
          defaultValues[schema.properties[propertyName].type] || null;
      }
    });

    return result;
  }

  /*
   * Generates a filter function based on type for filtering parameters
   *
   * @param {string} type
   *
   * @return {function} - the filter function
  */
  parameterTypeFilter(type) {
    return function filterParams(parameter) {
      return parameter.in === type;
    };
  }

  /*
   * Used for generating a hash from array of parameters.
   *   This method is used in Array#reduce method iterations
   *
   * @param {object} hash - the hash passed around in iterations
   * @param {object} param - a Swagger parameter object
   *
   * @param {object} - complete hash from parameters to this iterations
  */
  hashifyParams(hash, param) {
    if (!hash) {
      hash = {};
    }

    let paramValue = this.requestModel.parameters[param.name];
    let required = this.requestSchema.properties.parameters
      .properties[param.name].required === true;

    // if this parameter is not provided (undefined or empty string value) by
    // user and it's not required, move to next parameter without adding
    // this one to the hash
    if (!required) {
      if (paramValue === undefined) {
        return hash;
      }
      if (param.type === 'string' && paramValue === '') {
        return hash;
      }
    }

    hash[param.name] = this.requestModel.parameters[param.name];

    return hash;
  }

  /*
   * Generates the URL for this call based on all parameters and other
   *   conditions
   *
   * @returns {string} - the URL
  */
  generateUrl() {
    let requestModel = this.requestModel;
    let scheme = requestModel.scheme;
    let host = this.specs.host || window.location.host;
    let basePath = this.specs.basePath || '';
    let pathParams = this.parameters.filter(this.parameterTypeFilter('path'))
      .reduce(this.hashifyParams, {});
    let queryParams = this.parameters.filter(this.parameterTypeFilter('query'))
      .reduce(this.hashifyParams, {});
    let queryParamsStr;
    let pathStr;
    let isCollectionQueryParam = this.parameters.filter(this.parameterTypeFilter('query'))
      .some(function(parameter) {

        // if a query parameter has a collection format it doesn't matter what
        // is it's value, it will force the URL to not use `[]` in query string
        return parameter.items && parameter.items.collectionFormat;
      });

    // a regex that matches mustaches in path. e.g: /{pet}
    let pathParamRegex = /{([^{}]+)}/g;

    // if basePath is just a single slash (`/`), ignore it
    if (basePath === '/') {
      basePath = '';
    }

    // if there are selected securities and they are located in the query append
    // them to the URL
    if (Array.isArray(requestModel.security)) {
      requestModel.security.forEach(function(securityOption) {
        let auth = this.authManager.getAuth(securityOption);

        // if auth exists and it's an api key in query, add it to query params
        if (auth && auth.type === 'apiKey' && auth.security.in === 'query') {
          let authQueryParam = {};
          authQueryParam[auth.security.name] = auth.options.apiKey;
          //_.extend(queryParams, authQueryParam);
          Object.assign(queryParams, authQueryParam);
        }
      });
    }

    // generate the query string portion of the URL based on query parameters
    // UNDONE: how to convert this JQuery param function?
    queryParamsStr = decodeURIComponent(
      // UNDONE: $.param(queryParams, isCollectionQueryParam)
    );

    // fill in path parameter values inside the path
    pathStr = this.pathName.replace(pathParamRegex,

      // a simple replace method where it uses the available path parameter
      // value to replace the path parameter or leave it as it is if path
      // parameter doesn't exist.
      function(match) {
        let matchKey = match.substring(1, match.length - 1);

        //if (angular.isDefined(pathParams[matchKey])) {
        if (pathParams[matchKey]) {
          return pathParams[matchKey];
        }

        return match;
      }
    );

    // queryParamsStr can be undefined. Fall back to empty string in that case
    queryParamsStr = queryParamsStr ? ('?' + queryParamsStr) : '';

    // constructing the URL
    return scheme + '://' + // example: http://
      host +                // example: api.example.com
      basePath +            // example: /v1
      pathStr +             // example: /users/me
      queryParamsStr;       // example: ?all=true
  }

  /*
   * Returns all header parameters
   *
   * @returns {object} - list of all parameters that are in header
  */
  getHeaderParams() {

    // Select header parameters from all parameters and reduce them into a
    // single key/value hash where the key is parameter name
    let params = this.parameters.filter(this.parameterTypeFilter('header'))
      .reduce(this.hashifyParams, {});

    // add header based securities to list of headers
    if (Array.isArray(this.requestModel.security)) {
      this.requestModel.security.forEach(function(secuirtyOption) {

        let auth = this.authManager.getAuth(secuirtyOption);

        if (auth) {
          let authHeader = {};

          // HTTP basic authentication is always in header
          if (auth.type === 'basic') {
            authHeader = { Authorization: 'Basic ' + auth.options.base64 };

            // apiKey security can be in header, if it's in header use it
          } else if (auth.type === 'apiKey' && auth.security.in === 'header') {
            authHeader[auth.security.name] = auth.options.apiKey;

            // OAuth securities are always in header
          } else if (auth.type === 'oAuth2') {
            authHeader = { Authorization: 'Bearer ' + auth.options.accessToken };
          }

          // Extend the params hash with this auth
          // UNDONE: params = _.extend(params, authHeader);
          params = Object.assign(params, authHeader);
        }
      });
    }

    return params;
  }

  /*
   * Returns all headers needed to be shown in request preview
   *
   * @returns {object} - a hash of headers key/value pairs
  */
  getHeaders() {
    let headerParams = this.getHeaderParams();
    let content = this.getRequestBody();

    // get spec host or default host in the window. remove port from Host header
    let host = (this.specs.host || window.location.host).replace(/\:.+/, '');

    // A list of default headers that will be included in the XHR call
    let defaultHeaders = {
      Host: host,
      Accept: this.requestModel.accept || '*/*',
      'Accept-Encoding': 'gzip,deflate,sdch', //TODO: where this is coming from?
      'Accept-Language': 'en-US,en;q=0.8,fa;q=0.6,sv;q=0.4', // TODO: wut?
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      Origin: window.location.origin,
      Referer: window.location.origin + window.location.pathname,
      'User-Agent': window.navigator.userAgent
    };

    // UNDONE: headerParams = _.extend(defaultHeaders, headerParams);
    headerParams = Object.assign(defaultHeaders, headerParams);

    // if request has a body add Content-Type and Content-Length headers
    if (content !== null) {
      // TODO: handle file case
      headerParams['Content-Length'] = content.length;
      headerParams['Content-Type'] = this.requestModel.contentType;
    }

    return headerParams;
  }

  /*
   * Determines if request has a body. A request has body if it has a parameter
   *  that is in body or in form data
   *
   * @returns {boolean} - true if request has a body
  */
  hasRequestBody() {
    let bodyParam = this.parameters.filter(this.parameterTypeFilter('body'));
    let formDataParams = this.parameters.filter(this.parameterTypeFilter('formData'));

    return bodyParam.length || formDataParams.length;
  }

  /*
   * Gets the body parameter's current value
   *
   * @returns {string|object|null} - body parameter value or null if there is
   *   request body
  */
  getBodyModel() {

    if (!this.hasRequestBody()) {
      return null;
    }

    let bodyParam = this.parameters.filter(this.parameterTypeFilter('body'))[0];
    let formDataParams = this.parameters.filter(this.parameterTypeFilter('formData'));

    // body parameter case
    if (bodyParam) {
      let bodyParamName = bodyParam.name;
      let bodyParamValue = this.requestModel.parameters[bodyParamName];

      // if body type is file then return special result object with FILE_TYPE
      // key
      if (bodyParam.format === 'file') {
        let result = {};

        result[this.FILE_TYPE] = bodyParamValue;

        return result;
      }

      return bodyParamValue;

      // formData case
    } else {
      return formDataParams.reduce(this.hashifyParams, {});
    }
  }

  /*
   * Gets the request body based on current form data and other parameters
   *
   * @returns {string|null} - Raw request body or null if there is no body model
  */
  getRequestBody() {

    let bodyParam = this.parameters.filter(this.parameterTypeFilter('body'))[0];
    let bodyModel = this.getBodyModel();
    let contentType = this.requestModel.contentType;

    // if bodyModel doesn't exists, don't make a request body
    if (bodyModel === undefined || bodyModel === null) {
      return null;
    }

    // if body model is a file, return a FormData instance with the file in it
    if (bodyModel[this.FILE_TYPE]) {

      // TODO: put the mechanism of getting the file object into a method
      let bodyParamName = bodyParam.name;
      let form = new FormData();
      let inputEl = $('input[type="file"][name*="' + bodyParamName + '"]')[0];

      if (!inputEl) {
        return 'No file is selected';
      }

      let file = inputEl.files[0];
      if (!file) {
        return 'No file is selected';
      }

      form.append(bodyParamName, file, file.name);

      return form;
    }

    // if encoding is not defined, return body model as is
    if (!contentType) {
      return bodyModel;

      // if body has form-data encoding use formdataFilter to encode it to string
      // UNDONE: } else if (/form\-data/.test(contentType)) {
      //   return this.formdataFilter(bodyModel);

      // if body has application/json encoding use JSON to stringify it
    } else if (/json/.test(contentType)) {
      return JSON.stringify(bodyModel, null, 2);

      // if encoding is x-www-form-urlencoded use jQuery.param method to stringify
    } else if (/urlencode/.test(contentType)) {
      return // UNDONE: $.param(bodyModel);
    }

    return null;
  }

  /*
  * Returns true if this operation has a body param and that body param has
  *  a file
  *
  * @returns {boolean}
  */
  hasFileParam() {
    return this.getRequestBody() && this.getRequestBody().indexOf(this.FILE_TYPE) > -1;
  }

  /*
   * Parse a HTTP response header string into hash of HTTP header key/values
   * into
   *
   * @headers {string} - HTTP Headers
   *
   * @return {object} - HTTP header key/value
  */
  parseHeaders(headers) {
    let result = {};

    headers.split('\n').forEach(function(line) {
      let key = line.split(':')[0];
      let value = line.split(':')[1];
      //if (key && angular.isString(key) && angular.isString(value)) {
      if (key && typeof key === 'string' && typeof value === 'string') {
        result[key.trim()] = value.trim();
      }
    });

    return result;
  }

  /*
   * Makes the XHR call
   *
  */
  makeCall() {
    this.xhrInProgress = true;
    this.error = null;
    let omitHeaders = ['Host', 'Accept-Encoding', 'Connection', 'Origin',
      'Referer', 'User-Agent', 'Cache-Control', 'Content-Length'];

    // UNDONE: create call with Http object in Angular 2 TypeScript?
    console.log("makeCall not implemented");
    // $.ajax({
    //   url: this.generateUrl(),
    //   type: this.operationName,
    //   // UNDONE: headers: _.omit(this.getHeaders(), omitHeaders),
    //   data: this.getRequestBody(),
    //   // UNDONE: passed in from where? use @Input? contentType: this.contentType
    // })

    // .fail(function (jqXHR, textStatus, errorThrown) {
    //   this.xhrInProgress = false;
    //   this.textStatus = textStatus;
    //   this.error = errorThrown;
    //   this.xhr = jqXHR;

    //   this.$digest();
    // })

    // .done(function (data, textStatus, jqXHR) {
    //   this.textStatus = textStatus;
    //   this.xhrInProgress = false;
    //   this.responseData = data;
    //   this.xhr = jqXHR;
    //   this.responseHeaders = this.parseHeaders(jqXHR.getAllResponseHeaders());

    //   this.$digest();
    // });
  }

  /*
   * Make pretty printed version of a JSON string
   *
   * @param {string} input
   *
   * @returns {string}
  */
  prettyPrint(input) {

    // Try if it's JSON and return pretty JSON
    try {
      return JSON.stringify(JSON.parse(input), null, 2);
    } catch (jsonError) { }

    return input;
  };

  /*
   * Returns true if response is JSON
   *
   * @param {string|object|array} value
   *
   * @returns {boolean}
  */
  isJson(value) {

    // if value is already parsed return true
    if (Object.is(value) || Array.isArray(value)) {
      return true;
    }

    let err;
    try {
      JSON.parse(value);
    } catch (error) {
      err = error;
    }

    return !err;
  };

  /*
   * Returns true if response is specified type
   *
   * @param {object} headers - response headers
   * @param {string} type - the type to check for
   *
   * @returns {boolean}
  */
  isType(headers, type) {
    let regex = new RegExp(type);
    headers = headers || {};

    return headers['Content-Type'] && regex.test(headers['Content-Type']);
  };

  /*
   * Determines if this call is cross-origin
   *
   * @returns {boolean}
  */
  isCrossOrigin() {
    return this.specs.host && this.specs.host !== this.locationHost;
  };

}
