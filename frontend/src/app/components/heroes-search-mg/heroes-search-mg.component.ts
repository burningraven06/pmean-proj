import { Component, OnInit } from '@angular/core';
import { Hero } from '../../modelStructures/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroMongoService } from '../../services/hero.mongo.service';

@Component({
   selector: 'app-heroes-search-mg',
   templateUrl: './heroes-search-mg.component.html',
   styleUrls: ['./heroes-search-mg.component.css']
})
export class HeroSearchMGComponent implements OnInit {

   searchResults: Object[];

   constructor(private activatedRoute: ActivatedRoute, private heroMongoService: HeroMongoService) { }

   searchHero(queryString: string) {
      if (!queryString) {
         this.searchResults = [];
         return;
      }

      this.heroMongoService.searchHeroesByName(queryString).subscribe(data => this.searchResults = data)
   }

   ngOnInit(): void {
   }
}