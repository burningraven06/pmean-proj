import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';

const appRoutes: Routes =[
  {path: 'heroes', component: HeroesComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[
    RouterModule
  ],
})

export class AppRoutingModule {

}
