import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../models/actor';

@Component({
  selector: 'app-borrar-actor',
  templateUrl: './borrar-actor.component.html',
  styleUrls: ['./borrar-actor.component.css']
})
export class BorrarActorComponent implements OnInit {

  @Input() actor: Actor;
  @Output() action: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(action: boolean){
    this.action.emit(action);
  }

}
