import { Component, OnInit } from '@angular/core';
import { Hero } from '../../modelStructures/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroPGService } from '../../services/hero.pg.service';


@Component({
   selector: 'app-heroes-search-pg',
   templateUrl: './heroes-search-pg.component.html',
   styleUrls: ['./heroes-search-pg.component.css']
})
export class HeroSearchPGComponent implements OnInit {

   searchResults: Object[];

   constructor(private heroPgService: HeroPGService, private activatedRoute: ActivatedRoute) { }

   searchHero(queryString: string) {
      if (!queryString) {
         this.searchResults = [];
         return;
      }
      this.heroPgService.searchHeroesByName(queryString).subscribe(data => this.searchResults = data)
   }

   ngOnInit(): void {
   }
}