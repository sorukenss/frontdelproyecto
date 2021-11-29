import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PacienteService } from 'src/app/services/paciente.service';


@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  first = 0;

  rows = 10;
  paciente: Paciente[] = [];
  searchText: string;
  usuario: User;
  cond : boolean;
  constructor(private pacienteService: PacienteService, private loginService: AuthenticationService) {
    let currentUser = this.loginService.currentUserValue;
    if (currentUser) {
      this.usuario = currentUser;
      if(this.usuario.rol=="ADMINISTRADOR"){
        this.cond=true;
      }else{
        this.cond=false;
      }
    }
   }

  ngOnInit(): void {
    this.get();
  }
  get() {
    let response;
    this.pacienteService.get().subscribe(r => {
      response = r;
      this.paciente = response.pacientes;

    })
  }
  delete(codigo : string){
   
    this.pacienteService.delete(codigo).subscribe(r=>{
      
      this.get();
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
    return this.paciente ? this.first === (this.paciente.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.paciente ? this.first === 0 : true;
  }

}
