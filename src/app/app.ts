/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';

import {FORM_PROVIDERS} from 'angular2/common';

import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt';


import {RouterActive} from './directives/router-active';
import {Home} from './home/home';

// SNS
import {AdminComponent} from './components/admin/admin.component';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {InventoryComponent} from './components/inventory/inventory.component';
import {PurchasingComponent} from './components/purchasing/purchasing.component';
import {ClientComponent} from './components/client/client.component';

import {SwaggerComponent} from './components/swagger/swagger.component';
import {CodeGenComponent} from './components/code-gen/code-gen.component';

import {DataService} from './services/DataService';
import {AddressesApi} from '../API/Client/AddressesApi';

declare var Auth0Lock;

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [...FORM_PROVIDERS, DataService, AddressesApi],
  directives: [...ROUTER_DIRECTIVES, RouterActive],
  pipes: [],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'),
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

    <h1><!--Hello {{ profile?.name }}
      <img [src]="angularclassLogo" width="10%"/>
      <img src="./assets/img/logo.jpg"/-->
      <img src="./assets/img/AALogoSmall.png"/>
      AA MVP CodeGen


      <form class="form-inline pull-xs-right">
        <button *ngIf="!loggedIn()" (click)="login()" class="btn">Login</button>
        <button *ngIf="loggedIn()" (click)="logout()" class="btn btn-disabled">Logout {{ profile?.given_name }}</button>
      </form>
    </h1>

    <ul class="nav navbar-nav">
      <!--SNS-->
      <!--dashboard-->
      <li class="nav-item" router-active="active">
        <a [routerLink]=" ['Dashboard'] " class="nav-link">Dashboard</a>
      </li>

      <!--swagger-->
      <li class="nav-item" router-active="active">
        <a [routerLink]=" ['Swagger'] " class="nav-link">Swagger</a>
      </li>

      <li class="nav-item" router-active="active">
        <a [routerLink]=" ['CodeGen'] " class="nav-link">CodeGen</a>
      </li>


      <!--admin-->
      <li class="nav-item" router-active="active">
        <a [routerLink]=" ['Admin'] " class="nav-link">Admin</a>
      </li>
      <!--(Companies, Suppliers, Products, ...)-->
      <!--settings-->
      <!--li class="nav-item" router-active="active">
            <a [routerLink]=" ['Settings'] " class="nav-link">Settings</a>
          </li-->
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
      <button class="btn btn-disabled" type="submit">Search</button>
    </form>
  </nav>
</header>

<main>
  <router-outlet></router-outlet>
</main>

<br/>
<br/>
<br/>

<br/>
<br/>
<footer id="mainFooter" class="container text-center">
  Copyright (c) 2016 Angular Architects
</footer>
<!--WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>-->
  `
})

@RouteConfig([
  { path: '/', component: Home, name: 'Index' },
  { path: '/home', component: Home, name: 'Home' },

  { path: '/dashboard', component: DashboardComponent, name: 'Dashboard' },
  { path: '/admin/...', component: AdminComponent, name: 'Admin' },
  { path: '/client/...', component: ClientComponent, name: 'Client' },
  { path: '/inventory/...', component: InventoryComponent, name: 'Inventory' },
  //  { path: '/order', component: OrderComponent, name: 'Order' },
  { path: '/purchasing/...', component: PurchasingComponent, name: 'Purchasing' },

  { path: '/swagger', component: SwaggerComponent, name: 'Swagger' },
  { path: '/codeGen', component: CodeGenComponent, name: 'CodeGen' },

  { path: '/**', redirectTo: ['Index'] }
])

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'AA MVP CodeGen'; //'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  profile;


  lock = new Auth0Lock('HIOzw6Qm96f06Stri9cuTWJzutngVeeq', 'stalknsave.auth0.com');
  // DkSsSq1LaQbXI2dkE0DRkhEtbZHVjpNi
  // default ('HIOzw6Qm96f06Stri9cuTWJzutngVeeq', 'stalknsave.auth0.com'); //'AUTH0_CLIENT_ID', 'AUTH0_DOMAIN');
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public http: Http, public authHttp: AuthHttp) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }







  login() {
    // Popup Mode - https://auth0.com/docs/libraries/lock/types-of-applications#popup-mode
    this.lock.show((err: string, profile: string, id_token: string) => {

      this.profile = profile;
      if (err) {
        console.log('There was an error :/', err);
        throw new Error(err);
      }

      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);

      console.log('Hey dude', profile);
    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.profile = null;
  }

  loggedIn() {
    return tokenNotExpired();
  }

  getThing() {
    this.http.get('http://localhost:3001/ping')
      .subscribe(
      data => console.log(data.json()),
      err => console.log(err),
      () => console.log('Complete')
      );
  }

  getSecretThing() {
    this.authHttp.get('http://localhost:3001/secured/ping')
      .subscribe(
      data => console.log(data.json()),
      err => console.log(err),
      () => console.log('Complete')
      );
  }

  tokenSubscription() {
    this.authHttp.tokenStream.subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Complete')
    );
  }

  useJwtHelper() {
    var token = localStorage.getItem('id_token');

    console.log(
      this.jwtHelper.decodeToken(token),
      this.jwtHelper.getTokenExpirationDate(token),
      this.jwtHelper.isTokenExpired(token)
    );
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
