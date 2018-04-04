import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../modelStyles/hero';
import { HeroService } from '../hero.service';

@Component({
   selector: 'app-heroes-search',
   templateUrl: './heroes-search.component.html',
   styleUrls: ['./heroes-search.component.css']
})
export class HeroSearchComponent implements OnInit {

   searchResultsNew: Object[];
   private searchTerms = new Subject<string>();

   constructor(private heroService: HeroService) { }

   search(term: string): void {
      this.searchTerms.next(term);
   }

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