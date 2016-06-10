import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { HeroDetailComponent } from './heroDetail.component';
import { Hero, HeroService } from '../shared';

@Component({
  selector: 'ngp-heroes',
  template: require('./heroes.component.html'),
  styles: [require('./heroes.component.scss')],
  directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;

  constructor(private router: Router, private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;

    if (savedHero)
      this.getHeroes();
  }

  delete(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService.delete(hero)
      .then(response => {
        this.heroes = this.heroes.filter(h => h !== hero);

        if (this.selectedHero === hero)
          this.selectedHero = null;
      })
      .catch(error => this.error = error)
  }

  getHeroes() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes)
      .catch(error => this.error = error);
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

  onSelect(hero) {
    this.selectedHero = hero;
    this.addingHero = false;
  }
}
