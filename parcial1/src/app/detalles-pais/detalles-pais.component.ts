import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-detalles-pais',
  templateUrl: './detalles-pais.component.html',
  styleUrls: ['./detalles-pais.component.css']
})
export class DetallesPaisComponent implements OnInit, OnChanges {

  @Input() pais: Country;

  url: string = 'https://restcountries.eu/rest/v2/all';
  selected: Country;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.get();
  }

  ngOnChanges(){
    this.get();
  }

  get(){
    this.http.get(this.url).subscribe(
      (res: any[]) => {
        for(let obj of res){
          if(obj.name == this.pais){
            this.selected = {
              name: obj.name,
              flag: obj.flag,
              capital: obj.capital,
              currency: obj.currencies[0].name,
              region: obj.region,
              population: obj.population
            }
          }
        }
      }
    );
  }
}
