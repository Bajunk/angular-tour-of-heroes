import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService } from "./hero.service";
import { Hero } from "./hero";

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit{

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService){  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {

  }
}



