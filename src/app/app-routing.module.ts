import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarCiudadesComponent } from './componentes/asignar-ciudades/asignar-ciudades.component';
import { ErrorComponent } from './componentes/error/error.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HomeComponent } from './componentes/home/home.component';
import { UploadComponent } from './componentes/upload/upload.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'mapa', component: UploadComponent},
  {path: 'formulario', component: FormularioComponent },
  {path: 'formulario/:id', component: FormularioComponent },
  {path: 'asignarCiudades/:data', component: AsignarCiudadesComponent },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
