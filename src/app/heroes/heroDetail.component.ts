import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { HeroService } from '../common';

@Component({
  selector: 'ngp-hero-detail',
  template: require('./heroDetail.component.html'),
  styles: [require('./heroDetail.component.scss')],
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
