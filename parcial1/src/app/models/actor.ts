import { Country } from './country';

export interface Actor {
  id?: string,
  nombre: string,
  apellido: string,
  sexo: string,
  nacimiento: Date,
  nacionalidad: Country,
  foto?: string
}
