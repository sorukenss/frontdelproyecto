import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { Persona } from 'src/app/models/persona';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-completar-registro',
  templateUrl: './completar-registro.component.html',
  styleUrls: ['./completar-registro.component.css']
})
export class CompletarRegistroComponent implements OnInit {
  paciente: Paciente;
  usuario: User;
  persona : Persona;
  constructor(private pacienteService: PacienteService, private loginService: AuthenticationService) {
    let currentUser = this.loginService.currentUserValue;
    this.usuario=currentUser;
   }

  
  ngOnInit(): void {
    this.getById();
  }

  getById() {
    let response;
    this.pacienteService.getById(this.usuario.idPersona).subscribe((r) => {
      response = r;
      console.log(r);
      this.paciente = response.paciente;
      this.persona=this.paciente.persona;
    })
  }

}
