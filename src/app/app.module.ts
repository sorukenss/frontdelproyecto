import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { AppComponent }   from './app.component';
import { DialogModule } from 'primeng/dialog';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { PacientesRegistroComponent } from './pacientes/pacientes-registro/pacientes-registro.component';
import { BackgroundComponent } from './background/background.component';
import { ListaPacientesComponent } from './pacientes/lista-pacientes/lista-pacientes.component';
import { Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { MostrarPacienteComponent } from './pacientes/mostrar-paciente/mostrar-paciente.component';
import { TooltipModule } from 'primeng/tooltip';
import { SlideMenuModule } from 'primeng/slidemenu';
import { StepsModule } from 'primeng/steps';
import { AgendarCitaComponent } from './Citas/agendar-cita/agendar-cita.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultarCitaComponent } from './Citas/consultar-cita/consultar-cita.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsultarUtilidadComponent } from './Utilidades/consultar-utilidad/consultar-utilidad.component';
import {JwtInterceptor} from './services/jwt.interceptor';
import { ConsultarTratamientoComponent } from './tratamientos/consultar-tratamiento/consultar-tratamiento.component';
import { ApartarComponent } from './Citas/apartar/apartar.component';
import { VerHistorialComponent } from './historial/ver-historial/ver-historial.component';
import { VerHistoriaComponent } from './historial/ver-historia/ver-historia.component';

import { RegistrarPsicologoComponent } from './psicologos/registrar-psicologo/registrar-psicologo.component';
import { MostrarPsicologoComponent } from './psicologos/mostrar-psicologo/mostrar-psicologo.component';
import { ListaPsicologoComponent } from './psicologos/lista-psicologo/lista-psicologo.component';
import { FooterComponent } from './footer/footer.component';
import { AtenderCitasComponent } from './Citas/atender-citas/atender-citas.component';
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { PsicologoPipe } from './pipes/psicologo.pipe';
import { PacientePipe } from './pipes/paciente.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './@base/modal/modal.component';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { AgendapipePipe } from './pipes/agendapipe.pipe';
import { LoginComponent } from './Components/login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { CompletarRegistroComponent } from './pacientes/completar-registro/completar-registro.component';
import { ConsultarCitasPacienteComponent } from './Citas/consultar-citas-paciente/consultar-citas-paciente.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PacientesRegistroComponent,
    BackgroundComponent,
    ListaPacientesComponent,
    MostrarPacienteComponent,
    AgendarCitaComponent,
    ConsultarCitaComponent,
    ConsultarUtilidadComponent,
    ConsultarTratamientoComponent,
    ApartarComponent,
    VerHistorialComponent,
    VerHistoriaComponent,
    RegistrarPsicologoComponent,
    MostrarPsicologoComponent,
    ListaPsicologoComponent,
    FooterComponent,
    AtenderCitasComponent,
    PsicologoPipe,
    PacientePipe,
    ModalComponent,
    AlertModalComponent,
    AgendapipePipe,
    LoginComponent,
    CompletarRegistroComponent,
    ConsultarCitasPacienteComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TabMenuModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    DialogModule,
    SlideMenuModule,
    TooltipModule,
    CalendarModule,
    StepsModule,
    AccordionModule,
    ToastModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    

    RouterModule.forRoot([


    ], { relativeLinkResolution: 'legacy' }),
    AppRoutingModule,
    NgbModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent],
})
export class AppModule { }
