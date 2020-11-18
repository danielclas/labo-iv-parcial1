import { Country } from './country';

export interface Actor {
  id?: string,
  nombre: string,
  apellido: string,
  sexo: string,
  nacimiento: any,
  nacionalidad: Country,
  foto?: string
}
