import { Component } from '@angular/core';
import { AsyncRoute, RouteConfig,
         ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroService } from './common';
import * as template from './app.component.html';
import * as styles from './app.component.scss';

@Component({
  template,
  styles: [styles],
  selector: 'ng2-playground',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService],
})
@RouteConfig([
  new AsyncRoute({
    path: '/dashboard',
    name: 'Dashboard',
    loader: () => System.import('./dashboard').then((c: any) => c.DashboardComponent),
    useAsDefault: true,
  }),
  new AsyncRoute({
    path: '/heroes',
    name: 'Heroes',
    loader: () => System.import('./heroes').then((c: any) => c.HeroesComponent),
  }),
  new AsyncRoute({
    path: '/detail/:id',
    name: 'HeroDetail',
    loader: () => System.import('./heroes').then((c: any) => c.HeroDetailComponent),
  }),
])
export class AppComponent {
  title = 'Tour of Heroes';
}