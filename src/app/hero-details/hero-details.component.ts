import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../modelStyles/hero';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() passedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
