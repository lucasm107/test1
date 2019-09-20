import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe  } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  
  heroes: Heroe[] = [];
  constructor( 
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
    ) {

    console.log( 'Constructor');
    this.activatedRoute.params.subscribe( params => {
      console.log( params['term'] );
      this.heroes = this._heroesService.buscarHeroes( params['term'] );
      console.log( this.heroes );
    })
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    //console.log( this.heroes ); 
  }

  verHeroe( idx: number ){
    console.log( idx );
    this.router.navigate( ['/heroe', idx ]);
  }

}
