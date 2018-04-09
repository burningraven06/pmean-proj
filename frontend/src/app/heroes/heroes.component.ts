import { Component, OnInit } from '@angular/core';
import {Hero} from '../modelStyles/hero';
import {HeroService} from '../hero.service';
import {PaginationService} from '../pagination.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  constructor(private heroService: HeroService, private paginationService: PaginationService) { }
 
  ngOnInit() {
    this.retrieveAllHeroes();
  }

  heroes: Hero[];
  heroPagination: any = {};
  pagedHeroes: Hero[];

  showHeroes:boolean = true;

  retrieveAllHeroes() {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
      this.setPaginationPg(1);
    });
  }

  setPaginationPg(pgNum: number){
    if (pgNum <1 || pgNum > this.heroPagination.totalPages) return ;
    this.heroPagination = this.paginationService.getPagination(this.heroes.length, pgNum);
    this.pagedHeroes = this.heroes.slice(this.heroPagination.startIndex, this.heroPagination.endIndex+1)
  }

  toggleForm(){
    this.showHeroes = !this.showHeroes
  }

  createHero(nameVal:string, ageVal:number){
    nameVal = nameVal.trim();
    if (!nameVal || !ageVal) return;
    let newHero = {id:0, name: nameVal, age: ageVal}
    this.heroService.createHero(newHero).subscribe(data => {
      this.heroes.push(data);
      this.setPaginationPg(this.heroPagination.currentPage);
    });
   
    this.toggleForm();
  }

}
