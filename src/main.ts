/*
 * Providers provided by Angular
 */
import * as ngCore from 'angular2/core';
import * as browser from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, PathLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

import {enableProdMode} from 'angular2/core';

import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {AuthManager} from './app/services/auth-manager.service';

import { AddressesApi } from './API/Client/AddressesApi';
import { AddressesApiLocal } from './API/Client/AddressesApiLocal';
import { IAddressesApi } from './API/Client/IAddressesApi';

import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';

/*
 * App Environment Providers
 * providers that only live in certain environment
 */
const ENV_PROVIDERS = [];

if ('production' === process.env.ENV) {
  ngCore.enableProdMode();
  ENV_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS_PROD_MODE);
} else {
  ENV_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS);
}

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main() {
  return browser.bootstrap(App, [
    ...ENV_PROVIDERS,
// enableProdMode();

//  bootstrap(App,
//  [
//    ...('production' === process.env.ENV ? [] : ELEMENT_PROBE_PROVIDERS),
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    ngCore.provide(LocationStrategy, { useClass: HashLocationStrategy }),
    ngCore.provide(LocationStrategy, { useClass: PathLocationStrategy }),
    ngCore.provide(AuthHttp, {
     useFactory: (http) => {
       return new AuthHttp(new AuthConfig(), http);
     },
     deps: [Http]
    }),
    ngCore.provide(AuthManager, { useClass: AuthManager })
    //provide(IAddressesApi, { useClass: AddressesApi })
    //...FORM_PROVIDERS
   //     provide(AddressesApi, { useClass: AddressesApi }),

  ])
  .catch(err => console.error(err));
}


/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */

function bootstrapDomReady() {
  // bootstrap after document is ready
  return document.addEventListener('DOMContentLoaded', main);
}

if ('development' === process.env.ENV) {
  // activate hot module reload
  if (process.env.HMR) {
    if (document.readyState === 'complete') {
      main();
    } else {
      bootstrapDomReady();
    }
    module.hot.accept();
  } else {
    bootstrapDomReady();
  }
} else {
  bootstrapDomReady();
}
