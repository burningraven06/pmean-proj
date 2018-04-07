import { Component, OnInit } from '@angular/core';
import { Hero } from '../modelStyles/hero';
import { HeroService } from '../hero.service';

@Component({
   selector: 'app-heroes-search',
   templateUrl: './heroes-search.component.html',
   styleUrls: ['./heroes-search.component.css']
})
export class HeroSearchComponent implements OnInit {

   searchResultsNew: Object[];
   
   constructor(private heroService: HeroService) { }

   searchHero(queryString:string){
      if (!queryString) {
         this.searchResultsNew= [];
         return;
      }
      this.heroService.searchHeroesByName(queryString).subscribe(data => this.searchResultsNew = data)
   }

   ngOnInit(): void {
      
   }
}