import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '../models/actor';

@Component({
  selector: 'app-detalles-actor',
  templateUrl: './detalles-actor.component.html',
  styleUrls: ['./detalles-actor.component.css']
})
export class DetallesActorComponent implements OnInit {

  @Input() actor: Actor;
  constructor() { }

  ngOnInit(): void {
  }

}
