
import { Actor } from './actor';

export interface Pelicula {

  nombre: string,
  director: string,
  fecha: any,
  actores: Actor[],
  pais: string
}
