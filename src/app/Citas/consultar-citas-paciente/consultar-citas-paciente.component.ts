import { Component, OnInit } from '@angular/core';
import { Citas } from 'src/app/models/citas';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-consultar-citas-paciente',
  templateUrl: './consultar-citas-paciente.component.html',
  styleUrls: ['./consultar-citas-paciente.component.css']
})
export class ConsultarCitasPacienteComponent implements OnInit {

  first = 0;

  rows = 10;
  pacientes:any[] = [];
  citas : Citas[] = [];
  constructor(private citaService:CitaService, private loginService: AuthenticationService) {
    
   }

  ngOnInit(): void {
    let currentUser=this.loginService.currentUserValue;
    let response;
    this.citaService.getByPacienteId(currentUser.idPersona).subscribe(r => {
      response = r;
      this.citas = response.citas;
    })
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.pacientes ? this.first === (this.pacientes.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.pacientes ? this.first === 0 : true;
  }

}
