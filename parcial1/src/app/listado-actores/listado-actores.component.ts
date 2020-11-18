import { AnimateGallery } from './../animations';
import { RepositoryService } from './../services/repository.service';
import { Component, OnInit } from '@angular/core';
import { Alert } from '../models/alert';
import { Actor } from '../models/actor';

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.css'],
  animations: [AnimateGallery]
})
export class ListadoActoresComponent implements OnInit {

  alerts: Alert[] = [];
  selected: Actor;
  action: string;

  constructor(
    private repository: RepositoryService
  ) { }

  ngOnInit(): void {
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  onActorSelected(actor: Actor){
    this.selected = this.selected == actor ? null : actor;
    this.action = this.selected == null ? null : this.action;
  }

  switchAction(action: string){
    this.action = this.action == action ? null : action;
  }

  onDelete(confirmDelete: boolean){
    if(confirmDelete){
      this.repository.delete('actores', this.selected.id).then(
        res => {
          this.selected = null;
          this.action = null;
        }
      )
    }else{
      this.action = null;
    }
  }

}
