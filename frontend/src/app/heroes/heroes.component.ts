import { Component, OnInit } from '@angular/core';
import {Hero} from '../modelStyles/hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  
  showHeroes:boolean = true;

  retrieveAllHeroes(): void {
    this.heroService.getHeroes().subscribe(data => this.heroes = data);
  }

  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.retrieveAllHeroes();
  }

  toggleForm(){
    this.showHeroes = !this.showHeroes
  }

  createHero(nameVal:string, ageVal:number){
    nameVal = nameVal.trim();
    if (!nameVal || !ageVal) return;
    let newHero = {id: -1, name: nameVal, age: ageVal}
    this.heroService.createHero(newHero).subscribe(data => this.heroes.push(data));
    this.toggleForm()
  }

}
