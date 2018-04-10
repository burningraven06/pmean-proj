import { Component, OnInit } from '@angular/core';
import { Hero } from '../../modelStructures/hero';
import { HeroMongoService } from '../../services/hero.mongo.service';
import { PaginationService } from '../../services/pagination.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-mg',
  templateUrl: './heroes-mg.component.html',
  styleUrls: ['./heroes-mg.component.css']
})
export class HeroesMGComponent implements OnInit {

  constructor(private paginationService: PaginationService, private activatedRoute: ActivatedRoute, private heroMongoService: HeroMongoService) { }

  ngOnInit() {
    this.retrieveAllHeroes();
  }

  heroes: Hero[];
  heroPagination: any = {};
  pagedHeroes: Hero[];

  showHeroes: boolean = true;

  retrieveAllHeroes() {
    this.heroMongoService.getHeroes().subscribe(data => {
      this.heroes = data;
      this.setPaginationPg(1);
    });
  }

  setPaginationPg(pgNum: number) {
    if (pgNum < 1 || pgNum > this.heroPagination.totalPages) return;
    this.heroPagination = this.paginationService.getPagination(this.heroes.length, pgNum);
    this.pagedHeroes = this.heroes.slice(this.heroPagination.startIndex, this.heroPagination.endIndex + 1)
  }

  toggleForm() {
    this.showHeroes = !this.showHeroes
  }

  createHero(nameVal: string, ageVal: number) {
    const dbName = this.activatedRoute.snapshot.paramMap.get('dbName');
    nameVal = nameVal.trim();
    if (!nameVal || !ageVal) return;
    let newHero = { id: 0, name: nameVal, age: ageVal }
    this.heroMongoService.createHero(newHero).subscribe(data => {
      this.heroes.push(data);
      this.setPaginationPg(this.heroPagination.currentPage);
    });
    this.toggleForm();
  }

}