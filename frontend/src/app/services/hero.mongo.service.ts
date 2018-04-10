import { Injectable } from '@angular/core';
import { Hero } from '../modelStructures/hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HeroMongoService {

  constructor(private http: HttpClient) { }

  private heroesAPIURL = 'http://localhost:3000/api/mongo/heroes';

  private handleServerError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesAPIURL).pipe(catchError(this.handleServerError('getHeroes', [])));
  }

  getHeroByID(id: any): Observable<Hero> {
    const getHeroByIDURL = `${this.heroesAPIURL}/${id}`;
    return this.http.get<Hero>(getHeroByIDURL).pipe(catchError(this.handleServerError<Hero>(`getHeroByID: ${id}`)));
  }

  updateHeroByID(heroObj: any): Observable<Hero> {
    const httpPUTOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const updateHeroByIDURL = `${this.heroesAPIURL}/${heroObj._id}`
    return this.http.patch(updateHeroByIDURL, heroObj, httpPUTOptions).pipe(catchError(this.handleServerError<any>(`updateHeroByID: ${heroObj.id}`)))
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesAPIURL, hero).pipe(catchError(this.handleServerError<any>('addHero')))
  }

  deleteHeroByID(hero: any){
    const httpDELOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const deleteHeroByIDURL = `${this.heroesAPIURL}/${hero._id}`;
    return this.http.delete(deleteHeroByIDURL, httpDELOptions).pipe(catchError(this.handleServerError<any>('Delete Hero')))
  }

  searchHeroesByName(term: string): Observable<Hero[]> {
    // if (!term.trim()) return of([]);

    return this.http.get<Hero[]>(`${this.heroesAPIURL}/search/?name=${term}`).pipe(
      catchError(this.handleServerError<Hero[]>('searchHeroes', []))
    );
  }

}
