import { Component, OnInit } from '@angular/core';
import {Hero} from '../modelStyles/hero';
import {HEROESDUMMYLIST} from '../data/heroes';

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
  dummyHeroes = HEROESDUMMYLIST;

  clickedHero: Hero;

  onHeroSelect(heroObj: Hero): void{
    this.clickedHero = heroObj
  }

  constructor() { }
  ngOnInit() {
  }

}
