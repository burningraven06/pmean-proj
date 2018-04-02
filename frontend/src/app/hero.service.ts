import {Injectable} from '@angular/core';
import {Hero} from './modelStyles/hero';
import {HEROESDUMMYLIST} from './data/heroes';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {MessageService} from './message.service';
@Injectable()
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private heroesURL = 'http://localhost:3000/api/heroes';

  private handleServerError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.logMsg(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMsg('HeroService: Fetched Heroes');
    return this.http.get<Hero[]>(this.heroesURL).pipe(tap( heroes => this.logMsg(`Fetched Heroes`)), catchError(this.handleServerError('getHeroes', [])));
  }

  private logMsg(msg: string) {
    this.messageService.addMsg('HeroService: ' + msg);
  }

  getHeroByID(id: number): Observable<Hero> {
    this.messageService.addMsg(`HeroService: fetched hero with id=${id}`);
    const getHeroByIDURL = `${this.heroesURL}/${id}`;
    return this.http.get<Hero>(getHeroByIDURL).pipe( tap(_ => this.logMsg(`Fetched Hero with ID: ${id}`)), catchError(this.handleServerError<Hero>(`getHeroByID: ${id}`)) );
  }

}
