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
   heroes$: Observable<Hero[]>;
   private searchTerms = new Subject<string>();

   constructor(private heroService: HeroService) { }

   search(term: string): void {
      this.searchTerms.next(term);
   }

   ngOnInit(): void {
      this.heroes$ = this.searchTerms.pipe(
         debounceTime(300),
         distinctUntilChanged(),
         switchMap((term: string) => this.heroService.searchHeroesByName(term)),
      );
   }
}