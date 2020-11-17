import { Actor } from './../models/actor';
import { RepositoryService } from './../services/repository.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from '../models/country';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})

export class AltaActorComponent implements OnInit {

  form: FormGroup;
  country: Country;
  alerts: Alert[] = [];
  loading: boolean = false;

  minDate: NgbDateStruct = {year: 1900, month: 1, day: 1};
  maxDate: NgbDateStruct = {year: 2019, month: 12, day: 31};

  constructor(
    private repository: RepositoryService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      sexo: ['', [Validators.required]],
      nacimiento: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required]]
    })
  }

  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get sexo() { return this.form.get('sexo'); }
  get nacimiento() { return this.form.get('nacimiento'); }
  get nacionalidad() { return this.form.get('nacionalidad'); }

  onCountrySelected(country: Country){
    this.country = country;
    this.nacionalidad.setValue(this.country.name);
  }

  onSubmit(){

    this.loading = true;

    let obj: Actor;
    let date = new Date(this.nacimiento.value.year, this.nacimiento.value.month - 1, this.nacimiento.value.day);

    obj = {
      apellido: this.apellido.value,
      nombre: this.apellido.value,
      nacimiento: date,
      foto: this.country.flag,
      sexo: this.sexo.value,
      nacionalidad: this.nacionalidad.value
    }

    this.repository.add('actores', obj).then(res => {
      this.loading = false;
      this.form.reset();
      this.alerts.push({type: 'success', message: 'Actor agregado exitosamente'});
    })
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
