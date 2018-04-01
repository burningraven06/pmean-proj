import { Component, OnInit } from '@angular/core';

import {Hero} from '../modelStyles/hero';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  dashboardHeroes: Hero[];

  retrieveRecentHeroes(): void {
    this.heroService.getHeroes().subscribe(data => this.dashboardHeroes = data.slice(1, 4));
  }

  ngOnInit() {
    this.retrieveRecentHeroes();
  }

}
