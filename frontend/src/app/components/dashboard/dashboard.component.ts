import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../modelStructures/hero';
import { HeroPGService } from '../../services/hero.pg.service';
import { HeroMongoService } from '../../services/hero.mongo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroPgService: HeroPGService, private activatedRoute: ActivatedRoute, private heroMongoService: HeroMongoService) { }

  dashboardPGHeroes: Hero[];
  dashboardMGHeroes: Hero[];

  retrieveRecentHeroes(): void {
    this.heroPgService.getHeroes().subscribe(data => this.dashboardPGHeroes = data.slice(1, 4));
    this.heroMongoService.getHeroes().subscribe(data => this.dashboardMGHeroes = data.slice(1, 4))
  }

  ngOnInit() {
    this.retrieveRecentHeroes();
  }

}
