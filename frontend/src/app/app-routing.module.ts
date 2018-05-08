import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DoctorsMGComponent} from './components/doctors-mg/doctors-mg.component';
import {DoctorDetailsMGComponent} from './components/doctor-details-mg/doctor-details-mg.component';
import {DoctorsPGComponent} from './components/doctors-pg/doctors-pg.component';
import {DoctorDetailsPGComponent} from './components/doctor-details-pg/doctor-details-pg.component';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';

const appRoutes: Routes = [
  {
    path: 'doctors-mg', 
    component: DoctorsMGComponent
  },
  {
    path: 'doctor-detail-mg/:id', 
    component: DoctorDetailsMGComponent
  },
  {
    path: 'doctors-pg', 
    component: DoctorsPGComponent
  },
  {
    path: 'doctor-detail-pg/:id',
    component: DoctorDetailsPGComponent
  },
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {}
