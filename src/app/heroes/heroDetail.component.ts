import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { HeroService } from '../common';
import * as template from './heroDetail.component.html';
import * as styles from './heroDetail.component.scss';

@Component({
  template,
  styles: [styles],
  selector: 'hero-detail',
})
export class HeroDetailComponent implements OnInit {
  hero = undefined;

  constructor(private heroService: HeroService, private routeParams: RouteParams) {
  }

  ngOnInit() {
    const id = +this.routeParams.get('id');
    this.heroService.getHero(id).then(hero => (this.hero = hero));
  }

  goBack() {
    window.history.back();
  }
}
