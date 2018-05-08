import {Injectable} from '@angular/core';
import {User} from '../modelStructures/user';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class LoginAuthService{
  constructor (
    private http: HttpClient, 
    private router: Router
  ){};

  private usersMongoAPIURL = 'http://localhost:3000/api/mongo/users';
  private httpHeaderOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  TOKEN_KEY = 'token_value';

  get getToken(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get getIsAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  loginUser(user: User){
    let loginAPIURL = `${this.usersMongoAPIURL}/login`;
    
    return this.http.post(loginAPIURL, user, this.httpHeaderOptions).subscribe( (data:any) => {
      localStorage.setItem(this.TOKEN_KEY, data.token);
      this.router.navigate(['/dashboard']);
    });
    
  }

  logoutUser(){
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

}
