import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../modelStyles/hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  getHero(): void {
    const heroID = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHeroByID(heroID).subscribe(data => this.hero = data);
  }

  ngOnInit() {
    this.getHero();
  }

  goBack() {
    this.location.back();
  }

  updateHero(){
    this.heroService.updateHeroByID(this.hero).subscribe( () => this.goBack());
  }

  deleteHero(){
    this.heroService.deleteHeroByID(this.hero).subscribe();
    this.goBack();
  }
}
