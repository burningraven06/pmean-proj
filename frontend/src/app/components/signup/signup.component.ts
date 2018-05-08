import {Component, OnInit} from '@angular/core';
import {SignupService} from '../../services/signup.service';
import {User} from '../../modelStructures/user';
// import { FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{
  constructor(private signupService: SignupService){};

  // Method 1
  user = new User;
  show_alert = false;
  show_error = false;
  errtext = "";

  resetShowError(){
    this.show_error = false;
  }
  
  submitBy_DataBinding(){
    if (!this.user.email || !this.user.password){
      this.show_error = true;
      this.errtext = "Please fill values correctly";
      return ;
    }
    this.signupService.createUser(this.user).subscribe( (data: any) => {
      if (data.email_taken){
        this.show_error = true;
        this.errtext = "Email Taken";
        return;
      }
      if (data.user_created){
        this.show_alert = true;
        this.user.email = "";
        this.user.password = "";
      }
    });
  }


  // Method 2
  submitBy_ReactiveForm(theForm: any){
    if (!theForm.user_email || !theForm.user_password){
      this.show_error = true;
      return ;
    }
    let newUser = new User;
    newUser.email = theForm.user_email;
    newUser.password = theForm.user_password;

    this.signupService.createUser(newUser).subscribe( (data: any) => {
      if (data.email_taken){
        this.show_error = true;
        this.errtext = "Email Taken";
        return;
      }
      if (data.user_created){
        this.show_alert = true;
      //   theForm.user_email = "";
      //   theForm.user_password = "";
      }
    });
    
  }



  // Method 3
  submitBy_Btn(emailVal, passVal){
    if (!emailVal || !passVal){
      this.show_error = true;
      return ;
    }
    let newUser = new User;
    newUser.email = emailVal;
    newUser.password = passVal;

    this.signupService.createUser(newUser).subscribe( (data: any) => {
      if (data.email_taken){
        this.show_error = true;
        this.errtext = "Email Taken";
        return;
      }
      if (data.user_created){
        this.show_alert = true;
      }
    });
  
  }

  ngOnInit(){
  }
}
