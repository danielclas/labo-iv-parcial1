import { Pelicula } from './../models/pelicula';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Actor } from '../models/actor';
import { Alert } from '../models/alert';
import { RepositoryService } from '../services/repository.service';
import { Country } from '../models/country';
import { HttpClient } from '@angular/common/http';
import { AnimateGallery } from '../animations';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css'],
  animations: [AnimateGallery]
})
export class AltaPeliculaComponent implements OnInit {

  url: string = 'https://restcountries.eu/rest/v2/all';
  form: FormGroup;
  alerts: Alert[] = [];
  loading: boolean = false;
  actores: Actor[] = [];
  paises: Country[] = [];

  minDate: NgbDateStruct = {year: 1900, month: 1, day: 1};
  maxDate: NgbDateStruct = {year: 2019, month: 12, day: 31};

  constructor(
    private http: HttpClient,
    private repository: RepositoryService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.http.get(this.url).subscribe(
      (res: any[]) => {
        res.forEach(obj => this.paises.push({name: obj.name, flag: obj.flag}));
      }
    );

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      director: ['', [Validators.required, Validators.minLength(3)]],
      fecha: ['', [Validators.required]],
      actores: ['', [Validators.required]],
      pais: ['', [Validators.required]]
    })
  }

  get nombre() { return this.form.get('nombre'); }
  get director() { return this.form.get('director'); }
  get fecha() { return this.form.get('fecha'); }
  get pais() { return this.form.get('pais'); }
  get fActores() { return this.form.get('actores'); }

  onActorClicked(actor: Actor){
    if(this.actores.includes(actor)){
      this.actores.splice(this.actores.indexOf(actor));
    }else{
      this.actores.push(actor);
    }

    this.fActores.setValue(this.actores);
  }

  onSubmit(){
    this.loading = true;

    let date = new Date(this.fecha.value.year, this.fecha.value.month - 1, this.fecha.value.day);

    let obj: Pelicula = {
      nombre: this.nombre.value,
      fecha: date,
      pais: this.pais.value,
      director: this.director.value,
      actores: this.actores
    }

    this.repository.add('peliculas', obj).then(res => {
      this.loading = false;
      this.form.reset();
      this.actores = [];
      this.alerts.push({type: 'success', message: 'Película agregada exitosamente'});
    })
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
