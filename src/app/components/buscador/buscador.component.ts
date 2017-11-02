import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor( private activateRouter: ActivatedRoute,
               private _heroesService: HeroesService ) { }

  ngOnInit() {

    this.activateRouter.params.subscribe( params => {
      this.termino = params['termino'];
      console.log(params['termino']);
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log( this.heroes );
    });
  }

}
