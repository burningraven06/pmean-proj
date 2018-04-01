import { Component, OnInit } from '@angular/core';
import {Hero} from '../modelStyles/hero';
import {HEROESDUMMYLIST} from '../data/heroes';

import {HeroService} from '../hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Wind",
    age: 5
  };
  // dummyHeroes = HEROESDUMMYLIST;
  dummyHeroesNew: Hero[]

  clickedHero: Hero;

  onHeroSelect(heroObj: Hero): void{
    this.clickedHero = heroObj
  }

  retrieveAllHeroes(): void{
    this.dummyHeroesNew = this.heroService.getHeroes()
  }

  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.retrieveAllHeroes()
  }

}
