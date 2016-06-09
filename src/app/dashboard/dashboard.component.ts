import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { HeroService } from '../common';

@Component({
  template: require('./dashboard.component.html'),
  styles: [require('./dashboard.component.scss')],
  selector: 'dashboard',
})
export class DashboardComponent implements OnInit {
  heroes: any[] = [];

  constructor(private router: Router, private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => (this.heroes = heroes.slice(1, 5)));
  }

  gotoDetail(hero) {
    const link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
  }
}
