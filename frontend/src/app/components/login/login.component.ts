import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../services/loginAuth.service';
import { User } from '../../modelStructures/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(
    private loginAuthService: LoginAuthService,
    private router: Router
  ) { };


  user = new User();
  show_login_error = false;
  errMsg = ""

  resetShowError(){
    this.show_login_error = false;
  }

  loginUser() {
    this.loginAuthService.loginUser(this.user);

    if (!this.loginAuthService.getToken){
      this.show_login_error = true;
      this.errMsg = "Invalid Credentials";
      return;
    }
    
  }

  ngOnInit() { }
}