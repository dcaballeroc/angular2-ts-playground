import { provide } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

import { AppComponent } from './app/app.component';
import { InMemoryDataService } from './app/shared';

import './main.scss';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provide(XHRBackend, { useClass: InMemoryBackendService }),
  provide(SEED_DATA, { useClass: InMemoryDataService }),
]);
