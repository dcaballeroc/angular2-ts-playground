import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { HeroService } from '../common';
import * as template from './heroes.component.html';
import * as styles from './heroes.component.scss';

@Component({
  template,
  styles: [styles],
  selector: 'heroes',
})
export class HeroesComponent {
  heroes: any[];
  selectedHero: any;

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
