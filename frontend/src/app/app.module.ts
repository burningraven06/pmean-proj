import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesPGComponent } from './components/heroes-pg/heroes-pg.component';
import { HeroDetailsPGComponent } from './components/hero-details-pg/hero-details-pg.component';
import { HeroSearchPGComponent } from './components/heroes-search-pg/heroes-search-pg.component';
import { HeroesMGComponent} from './components/heroes-mg/heroes-mg.component';
import { HeroDetailsMGComponent} from './components/hero-details-mg/hero-details-mg.component';
import { HeroSearchMGComponent} from './components/heroes-search-mg/heroes-search-mg.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HeroMongoService} from './services/hero.mongo.service';
import { HeroPGService} from './services/hero.pg.service';
import { MessageService } from './services/message.service';
import { PaginationService } from './services/pagination.service'

import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeroesPGComponent,
    HeroDetailsPGComponent,
    MessagesComponent,
    NavbarComponent,
    DashboardComponent,
    HeroSearchPGComponent,
    HeroesMGComponent,
    HeroDetailsMGComponent,
    HeroSearchMGComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HeroPGService, MessageService, PaginationService, HeroMongoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
