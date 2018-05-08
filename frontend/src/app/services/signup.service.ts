import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../modelStructures/user';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class SignupService{
  constructor(private http: HttpClient){}
  private usersAPIURL = 'http://localhost:3000/api/mongo/users';

  createUser(user: User): Observable<User>{
    let signupAPIURL = `${this.usersAPIURL}/signup`;
    return this.http.post<User>(signupAPIURL, user);
  }
}