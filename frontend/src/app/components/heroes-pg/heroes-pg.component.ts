import { Component, OnInit } from '@angular/core';
import { Hero } from '../../modelStructures/hero';
import { HeroPGService } from '../../services/hero.pg.service';
import { PaginationService } from '../../services/pagination.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-pg',
  templateUrl: './heroes-pg.component.html',
  styleUrls: ['./heroes-pg.component.css']
})
export class HeroesPGComponent implements OnInit {

  constructor(private heroPgService: HeroPGService, private paginationService: PaginationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.retrieveAllHeroes();
  }

  heroes: Hero[];
  heroPagination: any = {};
  pagedHeroes: Hero[];

  showHeroes: boolean = true;

  retrieveAllHeroes() {
    this.heroPgService.getHeroes().subscribe(data => {
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
    nameVal = nameVal.trim();
    if (!nameVal || !ageVal) return;
    let newHero = { id: 0, name: nameVal, age: ageVal }
    this.heroPgService.createHero(newHero).subscribe(data => {
      this.heroes.push(data);
      this.setPaginationPg(this.heroPagination.currentPage);
    });
    this.toggleForm();
  }

}
