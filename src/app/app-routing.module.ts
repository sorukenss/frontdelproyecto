import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PacientesRegistroComponent } from './pacientes/pacientes-registro/pacientes-registro.component';
import { ListaPacientesComponent } from './pacientes/lista-pacientes/lista-pacientes.component';
import { MostrarPacienteComponent } from './pacientes/mostrar-paciente/mostrar-paciente.component';
import { AgendarCitaComponent } from './Citas/agendar-cita/agendar-cita.component';
import { ConsultarCitaComponent } from './Citas/consultar-cita/consultar-cita.component';
import { ConsultarUtilidadComponent } from './Utilidades/consultar-utilidad/consultar-utilidad.component';

import { ConsultarTratamientoComponent } from './tratamientos/consultar-tratamiento/consultar-tratamiento.component';
import { ApartarComponent } from './Citas/apartar/apartar.component';
import { RegistrarPsicologoComponent } from './psicologos/registrar-psicologo/registrar-psicologo.component';
import { MostrarPsicologoComponent } from './psicologos/mostrar-psicologo/mostrar-psicologo.component';
import { ListaPsicologoComponent } from './psicologos/lista-psicologo/lista-psicologo.component';
import { VerHistorialComponent } from './historial/ver-historial/ver-historial.component';
import { VerHistoriaComponent } from './historial/ver-historia/ver-historia.component';
import { AtenderCitasComponent } from './Citas/atender-citas/atender-citas.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './services/guards/auth.guard';
import { ConsultarCitasPacienteComponent } from './Citas/consultar-citas-paciente/consultar-citas-paciente.component';
import { ConsultarCitasPsicologoComponent } from './Citas/consultar-citas-psicologo/consultar-citas-psicologo.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  {path: 'pacientes-registro', component: PacientesRegistroComponent },
  { path: 'pacientes-consulta', component: ListaPacientesComponent },
  { path: 'paciente-mostrar/:id', component: MostrarPacienteComponent },
  {path:'agendar-cita',component:AgendarCitaComponent},
  {path:'consultar-cita',component:ConsultarCitaComponent},
  {path:'consultar-utilidad',component:ConsultarUtilidadComponent},
  {path:'consultar-tratamiento',component:ConsultarTratamientoComponent},
  {path:'apartar-cita/:id', component:ApartarComponent},
  {path:'registrar-psicologo', component:RegistrarPsicologoComponent},
  {path:'lista-psicologo', component:ListaPsicologoComponent},
  {path:'mostrar-psicologo/:id', component:MostrarPsicologoComponent},
  {path:'ver-historial', component:VerHistorialComponent},
  {path:'ver-historia', component:VerHistoriaComponent},
  {path:'atender-cita/:id', component:AtenderCitasComponent},
  {path:'login', component:LoginComponent},
  {path:'consultar-cita-paciente',component:ConsultarCitasPacienteComponent},
  {path:'consultar-cita-psicologo',component:ConsultarCitasPsicologoComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
