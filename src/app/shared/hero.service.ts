import { Injectable } from '@angular/core';

import { Hero } from './';
import { HEROES } from './heroes.mock';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 5000)
    );
  }

  getHero(id: number) {
    return this.getHeroes().then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
}
