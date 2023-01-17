import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { NavmenuComponent } from './parametro1/navmenu/navmenu.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ContactanosComponent } from './parametro1/contactanos/contactanos.component';
import { InicioComponent } from './parametro1/inicio/inicio.component';
import { QuienesComponent } from './parametro1/quienes/quienes.component';
import { CasaComponent } from './actividad17/casa/casa.component';
import { PrimeroComponent } from './actividad17/primero/primero.component';
import { SegundoComponent } from './actividad17/segundo/segundo.component';
import { TerceroComponent } from './actividad17/tercero/tercero.component';
import { CuartoComponent } from './actividad17/cuarto/cuarto.component';
import { QuintoComponent } from './actividad17/quinto/quinto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagina1Component,
    Pagina2Component,
    NavmenuComponent,
    PagenotfoundComponent,
    ContactanosComponent,
    InicioComponent,
    QuienesComponent,
    CasaComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    QuintoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
