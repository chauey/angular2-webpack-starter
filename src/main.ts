/*
 * Providers provided by Angular
 */
import {provide} from 'angular2/core';
import 'jquery';
import 'bootstrap-loader';

import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, PathLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

import {enableProdMode} from 'angular2/core';

import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {AuthManager} from './app/services/auth-manager.service';

import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app';
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {

  enableProdMode(); // TODO: check if wanted. Enabled this due to "Expression 'xxxx' was changed after it was checked"
  // https://github.com/angular/angular/issues/5950 https://github.com/angular/angular/issues/6189

  bootstrap(App,
  [
    ...('production' === process.env.ENV ? [] : ELEMENT_PROBE_PROVIDERS),
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: PathLocationStrategy }),
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig(), http);
      },
      deps: [Http]
    }),
    provide(AuthManager, { useClass: AuthManager }),
    //provide(IAddressesApi, { useClass: AddressesApi })
    //...FORM_PROVIDERS
   //     provide(AddressesApi, { useClass: AddressesApi }),

  ])
  .catch(err => console.error(err));
});
