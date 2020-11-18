import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})

export class TablaPaisesComponent implements OnInit {

  url: string = 'https://restcountries.eu/rest/v2/all';
  countries: Country[] = [];

  @Output() countrySelected = new EventEmitter<Country>();
  @Input() size: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      (res: any[]) => {
        res.forEach(obj => this.countries.push({name: obj.name, flag: obj.flag}));
      }
    );
  }

  onClick(country: Country){
    this.countrySelected.emit(country);
  }
}
