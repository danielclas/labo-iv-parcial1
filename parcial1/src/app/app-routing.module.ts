import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaActorComponent } from './alta-actor/alta-actor.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'alta-actor', component: AltaActorComponent},
  {path: 'tabla-paises', component: TablaPaisesComponent},
  {path: 'listado-actores', component: ListadoActoresComponent},
  {path: 'alta-peliculas', component: AltaPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
