import { Component, OnInit } from '@angular/core';
import {Hero} from '../modelStyles/hero';
import {HEROESDUMMYLIST} from '../data/heroes';

import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  dummyHeroesNew: Hero[];

  retrieveAllHeroes(): void {
    this.heroService.getHeroes().subscribe(data => this.dummyHeroesNew = data);
  }

  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.retrieveAllHeroes();
  }

}
