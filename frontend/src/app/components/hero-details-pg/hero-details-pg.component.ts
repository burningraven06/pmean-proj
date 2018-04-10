import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../modelStructures/hero';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroPGService } from '../../services/hero.pg.service';

@Component({
  selector: 'app-hero-details-pg',
  templateUrl: './hero-details-pg.component.html',
  styleUrls: ['./hero-details-pg.component.css']
})

export class HeroDetailsPGComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private activatedRoute: ActivatedRoute, private heroPgService: HeroPGService, private location: Location, private router: Router) { }


  getHero(): void {
    const heroID = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroPgService.getHeroByID(heroID).subscribe(data => this.hero = data);
  }

  ngOnInit() {
    this.getHero();
  }

  goBack() {
    this.location.back();
  }

  updateHero() {
    this.heroPgService.updateHeroByID(this.hero).subscribe(() => this.goBack());
  }

  deleteHero() {
    this.heroPgService.deleteHeroByID(this.hero).subscribe(() => this.router.navigate(['/heroes-pg']));
    
  }
}
