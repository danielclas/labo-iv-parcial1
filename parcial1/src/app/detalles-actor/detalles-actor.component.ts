import { RepositoryService } from './../services/repository.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Actor } from '../models/actor';

@Component({
  selector: 'app-detalles-actor',
  templateUrl: './detalles-actor.component.html',
  styleUrls: ['./detalles-actor.component.css']
})
export class DetallesActorComponent implements OnInit, OnChanges {

  @Input() actor: Actor;
  foto: string;

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
    this.foto = null;

    this.repository.getFile(this.actor.foto)
    .subscribe(url => this.foto = url);
  }

}
