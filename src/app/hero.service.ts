import {Injectable} from '@angular/core';
import {Hero} from './modelStyles/hero';
import {HEROESDUMMYLIST} from './data/heroes';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {MessageService} from './message.service';
@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMsg('HeroService: Fetched Heroes');
    return of(HEROESDUMMYLIST);
  }

}
