import { Actor } from './../models/actor';
import { RepositoryService } from './../services/repository.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {

  actores: Actor[] = [];
  selected: Actor;
  @Output() actorSelected = new EventEmitter<Actor>();

  constructor(
    private repository: RepositoryService
  ) { }

  ngOnInit(): void {
    this.repository.getAll('actores').valueChanges({idField: 'id'})
    .subscribe(vals => this.actores = [...vals] as Actor[])
  }

  onClick(actor: Actor){
    if(this.selected != actor){
      this.selected = actor;
    }else{
      this.selected = null;
    }

    this.actorSelected.emit(actor);
  }

}
