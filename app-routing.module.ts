import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import { HomeComponent } from './components/home/home.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component'; */

/* import { InicioComponent } from './parametro1/inicio/inicio.component';
import { QuienesComponent } from './parametro1/quienes/quienes.component';
import { ContactanosComponent } from './parametro1/contactanos/contactanos.component'; */

import { CasaComponent } from './actividad17/casa/casa.component';
import { CuartoComponent } from './actividad17/cuarto/cuarto.component';
import { PrimeroComponent } from './actividad17/primero/primero.component';
import { QuintoComponent } from './actividad17/quinto/quinto.component';
import { SegundoComponent } from './actividad17/segundo/segundo.component';
import { TerceroComponent } from './actividad17/tercero/tercero.component';

const routes: Routes = [
  /* {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path: 'inicio', component:InicioComponent},
  {path: 'quienes/:id', component:QuienesComponent},
  {path: 'contactanos', component:ContactanosComponent},
  {path: 'quienes', component:InicioComponent},
  
  {path: '**',component:InicioComponent} */

  {path: '', redirectTo: '/casa', pathMatch:'full'},
  {path: 'casa', component:CasaComponent},
  {path: 'primero/:id', component:PrimeroComponent},
  {path: 'segundo/:id', component:SegundoComponent},
  {path: 'tercero/:id', component:TerceroComponent},
  {path: 'cuarto/:id', component:CuartoComponent},
  {path: 'quinto/:id', component:QuintoComponent},

  {path: 'primero', component:PrimeroComponent},
  {path: 'segundo', component:SegundoComponent},
  {path: 'tercero', component:TerceroComponent},
  {path: 'cuarto', component:CuartoComponent},
  {path: 'quinto', component:QuintoComponent},
  
  {path: '**',component:CasaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
