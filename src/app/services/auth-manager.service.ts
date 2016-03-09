'use strict';

import { Injectable } from 'angular2/core';

// Common data service
@Injectable()
export class AuthManager {

  // https://docs.google.com/document/d/1DMacL7iwjSMPP0ytZfugpU4v0PWUK0BT6lhyaVEmlBQ/mobilebasic?pli=1
  // $sessionStorage.$default({
  //   securities: {}
  // });
  $sessionStorage = {
    securities: {}
  }; // window.localStorage; // UNDONE

  constructor() {

  }
  /*
     * Authenticates HTTP Basic Auth securities
     * @param securityName {string} - name of the security
     * @param security {object} - the security object
     * @param options {object} - options of the security including authentication
     * details
    */
  basicAuth(securityName, security, options) {
    if (securityName === '$$hashKey') {
      return;
    }

    // UNDONE: if (!_.isObject(options)) {
    if (typeof options !== 'object') {
      throw new TypeError('Can not authenticate with options');
    }

    options.username = options.username || '';
    options.password = options.password || '';
    options.isAuthenticated = true;
    options.base64 = window.btoa(options.username + ':' + options.password);
    options.securityName = securityName;
    this.$sessionStorage.securities[securityName] = {
      type: 'basic',
      security: security,
      options: options
    };
  }

  /*
   * Authenticates OAuth2 securities
   * @param securityName {string} - name of the security
   * @param security {object} - the security object
   * @param options {object} - options of the security including authentication
   * details
  */
  oAuth2(securityName, security, options) {
    if (securityName === '$$hashKey') {
      return;
    }
    options.isAuthenticated = true;
    this.$sessionStorage.securities[securityName] = {
      type: 'oAuth2',
      security: security,
      options: options
    };
  }

  /*
   * Authenticates API Key securities
   * @param securityName {string} - name of the security
   * @param security {object} - the security object
   * @param options {object} - options of the security including authentication
   * details
  */
  apiKey(securityName, security, options) {
    if (securityName === '$$hashKey') {
      return;
    }
    options.isAuthenticated = true;
    this.$sessionStorage.securities[securityName] = {
      type: 'apiKey',
      security: security,
      options: options
    };
  }

  /*
   * Gets a security object
   * @returns {object} the security object
  */
  getAuth(securityName) {
    return this.$sessionStorage.securities[securityName];
  }

  /*
   * Checks if a security is authenticated
   * @returns {boolean} - true if security is authenticated false otherwise
  */
  securityIsAuthenticated(securityName) {
    var auth = this.$sessionStorage.securities[securityName];

    return auth && auth.options && auth.options.isAuthenticated;
  }
}
