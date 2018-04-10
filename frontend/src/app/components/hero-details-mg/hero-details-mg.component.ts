import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../modelStructures/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroMongoService } from '../../services/hero.mongo.service';

@Component({
  selector: 'app-hero-details-mg',
  templateUrl: './hero-details-mg.component.html',
  styleUrls: ['./hero-details-mg.component.css']
})

export class HeroDetailsMGComponent implements OnInit {

  hero: Hero;

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private heroMongoService: HeroMongoService) { }

  getHero(): void {
    const heroID = this.activatedRoute.snapshot.paramMap.get('id');
    this.heroMongoService.getHeroByID(heroID).subscribe(data => this.hero = data);
  }

  ngOnInit() {
    this.getHero();
  }

  goBack() {
    this.location.back();
  }

  updateHero() {
    this.heroMongoService.updateHeroByID(this.hero).subscribe(() => this.goBack());
  }

  deleteHero() {
    this.heroMongoService.deleteHeroByID(this.hero).subscribe(() => this.goBack());
  }
}
