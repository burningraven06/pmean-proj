import {Injectable} from '@angular/core';
import {Hero} from './modelStyles/hero';
import {HEROESDUMMYLIST} from './data/heroes';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import {MessageService} from './message.service';
@Injectable()
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private heroesURL = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMsg('HeroService: Fetched Heroes');
    return of(HEROESDUMMYLIST);
  }

  private logMsg(msg: string) {
    this.messageService.addMsg('HeroService: ' + msg);
  }

  

  getHeroByID(id: number): Observable<Hero> {
    this.messageService.addMsg(`HeroService: fetched hero with id=${id}`);
    return of(HEROESDUMMYLIST.find(hero => hero.id === id));
  }

}
