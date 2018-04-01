import { Injectable } from '@angular/core';
import {Hero} from './modelStyles/hero';
import {HEROESDUMMYLIST} from './data/heroes';

@Injectable() 
export class HeroService {

  constructor() { }
  
  getHeroes(): Hero[]{
    return HEROESDUMMYLIST;
  }

}
