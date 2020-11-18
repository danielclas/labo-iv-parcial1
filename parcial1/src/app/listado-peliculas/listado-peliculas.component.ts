import { Pelicula } from './../models/pelicula';
import { RepositoryService } from './../services/repository.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Actor } from '../models/actor';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit, OnChanges {

  peliculas: Pelicula[];

  @Input() actor: Actor;

  constructor(
    private repository: RepositoryService
  ) { }

  ngOnInit() {
    this.get();
  }

  ngOnChanges(){
    this.get();
  }

  get(){
    this.repository.getAll('peliculas').valueChanges({idField: 'id'})
    .subscribe(vals => {
      let arr = [...vals] as unknown as Pelicula[];
      this.peliculas = arr.filter(k => k.actores.some(a => a.id == this.actor.id));
    })
  }
}
