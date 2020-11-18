import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Alert } from '../models/alert';
import { Actor } from '../models/actor';
import { Country } from '../models/country';
import { RepositoryService } from '../services/repository.service';
import { NgbDatepicker, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modificar-actor',
  templateUrl: './modificar-actor.component.html',
  styleUrls: ['./modificar-actor.component.css']
})
export class ModificarActorComponent implements OnInit, AfterViewInit {

  form: FormGroup;
  country: Country;
  alerts: Alert[] = [];
  loading: boolean = false;
  startDate: NgbDateStruct;

  @ViewChild(NgbDatepicker) child: NgbDatepicker;
  @Input() actor: Actor;
  @Output() closeEvent = new EventEmitter();

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

    let date: Date = this.actor.nacimiento.toDate();

    this.nombre.setValue(this.actor.nombre);
    this.apellido.setValue(this.actor.apellido);
    this.sexo.setValue(this.actor.sexo);
    this.nacionalidad.setValue(this.actor.nacionalidad);
    this.nacimiento.setValue(date);

    this.startDate = {year: date.getFullYear(), month: date.getMonth()+1, day: date.getDate()};
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.child.focusDate(this.startDate);
      this.child.focusSelect();
    }, 500);
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
      nombre: this.nombre.value,
      nacimiento: date,
      foto: this.country.flag,
      sexo: this.sexo.value,
      nacionalidad: this.nacionalidad.value
    }

    this.repository.update('actores', this.actor.id, obj).then(res => {
      this.loading = false;
      this.closeEvent.emit();
    })
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
