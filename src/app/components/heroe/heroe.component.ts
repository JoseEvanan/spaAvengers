import { Heroe, HeroesService } from '../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  constructor( private activatedroute: ActivatedRoute,
               private _heroesService: HeroesService) {

    this.activatedroute.params.subscribe( params => {
        console.log(params['id']);
        this.heroe = this._heroesService.getHeroe( params['id'] );
        console.log( this.heroe );
    });

  }

  ngOnInit() {
  }

}
