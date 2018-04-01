import {Injectable} from '@angular/core';
import {Hero} from './modelStyles/hero';
import {HEROESDUMMYLIST} from './data/heroes';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable() 
export class HeroService {

  constructor() { }
  
  // getHeroes(): Hero[]{
  //   return HEROESDUMMYLIST;
  // }

  getHeroes(): Observable<Hero[]> {
    return of(HEROESDUMMYLIST)
  }

}
