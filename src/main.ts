import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { provide } from '@angular/core';

import { AppComponent } from './app/app.component';
import { InMemoryDataService } from './app/shared';

import './main.scss';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  HTTP_PROVIDERS,
  provide(XHRBackend, { useClass: InMemoryBackendService }),
  provide(SEED_DATA, { useClass: InMemoryDataService }),
  provideForms()
]).catch((error: any) => console.log(error));
