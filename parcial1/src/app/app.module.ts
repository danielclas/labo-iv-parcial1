import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './alta-actor/alta-actor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { BackArrowComponent } from './back-arrow/back-arrow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: "AIzaSyCEBUjB-Qj4P9vlb7YC8jNmQZAohed91kM",
  authDomain: "labo-iv-parcial1.firebaseapp.com",
  databaseURL: "https://labo-iv-parcial1.firebaseio.com",
  projectId: "labo-iv-parcial1",
  storageBucket: "labo-iv-parcial1.appspot.com",
  messagingSenderId: "587705347311",
  appId: "1:587705347311:web:fe32cea6a1328be2bd3f1a"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaPaisesComponent,
    AltaActorComponent,
    ListadoActoresComponent,
    AltaPeliculaComponent,
    BackArrowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
