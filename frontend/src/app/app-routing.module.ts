import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroesMGComponent} from './components/heroes-mg/heroes-mg.component';
import {HeroDetailsMGComponent} from './components/hero-details-mg/hero-details-mg.component';
import {HeroesPGComponent} from './components/heroes-pg/heroes-pg.component';
import {HeroDetailsPGComponent} from './components/hero-details-pg/hero-details-pg.component';


const appRoutes: Routes = [
  {path: 'heroes-mg', component: HeroesMGComponent},
  {path: 'hero-detail-mg/:id', component: HeroDetailsMGComponent},
  {path: 'heroes-pg', component: HeroesPGComponent},
  {path: 'hero-detail-pg/:id', component: HeroDetailsPGComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {}
