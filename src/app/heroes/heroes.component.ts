import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { HeroService } from '../common';

@Component({
  template: require('./heroes.component.html'),
  styles: [require('./heroes.component.scss')],
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
