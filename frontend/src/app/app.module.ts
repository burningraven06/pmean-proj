import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DoctorsPGComponent } from './components/doctors-pg/doctors-pg.component';
import { DoctorDetailsPGComponent } from './components/doctor-details-pg/doctor-details-pg.component';
import { DoctorSearchPGComponent } from './components/doctors-search-pg/doctors-search-pg.component';
import { DoctorsMGComponent} from './components/doctors-mg/doctors-mg.component';
import { DoctorDetailsMGComponent} from './components/doctor-details-mg/doctor-details-mg.component';
import { DoctorSearchMGComponent} from './components/doctors-search-mg/doctors-search-mg.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';

import { DoctorMongoService} from './services/doctor.mongo.service';
import { DoctorPGService} from './services/doctor.pg.service';
import { MessageService } from './services/message.service';
import { PaginationService } from './services/pagination.service';
import { SignupService} from './services/signup.service';
import { LoginAuthService} from './services/loginAuth.service';

import { AppRoutingModule } from './app-routing.module';
import { Http } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    DoctorsPGComponent,
    DoctorDetailsPGComponent,
    MessagesComponent,
    NavbarComponent,
    DashboardComponent,
    DoctorSearchPGComponent,
    DoctorsMGComponent,
    DoctorDetailsMGComponent,
    DoctorSearchMGComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DoctorMongoService, MessageService, PaginationService, DoctorPGService, SignupService, LoginAuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
