import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/@base/modal/modal.component';
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
  formGroup: FormGroup;
  paciente: Paciente;
  usuario: User;
  persona : Persona;
  constructor(private pacienteService: PacienteService, private modalService: NgbModal,private router: Router, private loginService: AuthenticationService,private formBuilder: FormBuilder) {
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

  update(){
    let response;
    this.paciente.codigoPaciente=this.paciente.persona.identification;
    this.pacienteService.update(this.paciente).subscribe((r)=>{
      response=r
      this.usuario.estado="COMPLETO";
      sessionStorage.setItem('login', JSON.stringify(this.usuario));
      this.router.navigateByUrl("");
      const messageBox = this.modalService.open(ModalComponent);
          messageBox.componentInstance.title = "Resultado";
          messageBox.componentInstance.cuerpo = "Info: " + response.mensaje;
      window.location.reload();
    });
   
  }

}
