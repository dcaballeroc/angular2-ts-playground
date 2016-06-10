import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero, HeroService } from '../shared';

@Component({
  selector: 'ngp-heroes',
  template: require('./heroes.component.html'),
  styles: [require('./heroes.component.scss')],
})
export class HeroesComponent {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => (this.heroes = heroes));
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
