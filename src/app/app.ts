/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './directives/router-active';
import {Home} from './home/home';

// SNS
import {AdminComponent} from './components/admin/admin.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {InventoryComponent} from './components/inventory/inventory.component';
//import {OrderComponent} from './components/order/order.component';
import {PurchasingComponent } from './components/purchasing/purchasing.component';
import {SettingsComponent} from './components/settings/settings.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive ],
  pipes: [],
  styles: [ require('bootstrap/dist/css/bootstrap.min.css'),
  `
    // nav ul {
    //   display: inline;
    //   list-style-type: none;
    //   margin: 0;
    //   padding: 0;
    //   width: 60px;
    // }
    // nav li {
    //   display: inline;
    // }
    // nav li.active {
    //   background-color: lightgray;
    // }
  `],
  template: `
    <header>
      <nav class="navbar navbar-dark bg-primary">
              <h1><!--Hello--> {{ name }}</h1>

        <ul class="nav navbar-nav">
    
     
          <!--SNS-->
          <!--dashboard-->
          <li class="nav-item" router-active="active">
            <a [routerLink]=" ['Dashboard'] " class="nav-link">Dashboard</a>
          </li>
          <!--admin-->
          <li class="nav-item" router-active="active">
            <a [routerLink]=" ['Admin'] " class="nav-link">Admin</a>
          </li>
          <!--(Companies, Suppliers, Products, ...)-->
          <!--settings-->
          <li class="nav-item" router-active="active">
            <a [routerLink]=" ['Settings'] " class="nav-link">Settings</a>
          </li>
          <!--inventory-->
          <li class="nav-item" router-active="active">
            <a [routerLink]=" ['Inventory'] " class="nav-link">Inventory</a>
          </li>
          <!--purchasing-->
          <li class="nav-item" router-active="active">
            <a [routerLink]=" ['Purchasing'] " class="nav-link">Purchasing</a>
          </li>

        </ul>
        
         <form class="form-inline pull-xs-right">
    <input class="form-control" type="text" placeholder="Search">
    <button class="btn btn-success-outline" type="submit">Search</button>
  </form>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
      <!--button type="button" class="btn btn-primary">Primary</button-->
    </main>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="container text-center">
      Copyright (c) 2016 StalkNSave
    </div>
      <!--WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>-->
  `
})

@RouteConfig([
  { path: '/', component: Home, name: 'Index' },
  { path: '/home', component: Home, name: 'Home' },

  { path: '/dashboard', component: DashboardComponent, name: 'Dashboard' },
  { path: '/admin', component: AdminComponent, name: 'Admin' },
  { path: '/company', component: SettingsComponent, name: 'Settings' },
  { path: '/inventory/...', component: InventoryComponent, name: 'Inventory' },
//  { path: '/order', component: OrderComponent, name: 'Order' },
  { path: '/purchasing/...', component: PurchasingComponent, name: 'Purchasing' },

  { path: '/**', redirectTo: ['Index'] }
])

export class App {
  name = 'StalkNSave'; //'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  constructor() {

  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
