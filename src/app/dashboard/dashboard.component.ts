import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero, HeroService } from '../shared';

@Component({
  selector: 'ngp-dashboard',
  template: require('./dashboard.component.html'),
  styles: [require('./dashboard.component.scss')],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private router: Router, private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => (this.heroes = heroes.slice(1, 5)));
  }

  gotoDetail(hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
  }
}
