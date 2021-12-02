import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PacienteService } from 'src/app/services/paciente.service';
@Component({
  selector: 'app-mostrar-paciente',
  templateUrl: './mostrar-paciente.component.html',
  styleUrls: ['./mostrar-paciente.component.css']
})
export class MostrarPacienteComponent implements OnInit {
  visible: boolean = false;
  usuario: User;
  cond : boolean;
  tipodocumento:string;
  paciente: Paciente;
  constructor(private router: Router, private loginService: AuthenticationService, private routeActive: ActivatedRoute, private pacienteService: PacienteService) {
    let currentUser = this.loginService.currentUserValue;
    if (currentUser) {
      this.usuario = currentUser;
      if(this.usuario.rol=="ADMINISTRADOR" || this.usuario.rol=="PACIENTE"){
        this.cond=true;
      }else{
        this.cond=false;
      }
    }
  }
  
  Id: string;
  mensajee:string;
  ngOnInit(): void {
    const id = this.routeActive.snapshot.params.id;
    this.Id = id;
    this.getById();
  }
  getById() {
    let response;
    
    this.pacienteService.getById(this.Id).subscribe((r) => {
      response = r;
      console.log(r);
      this.paciente = response.paciente;
       this.tipodocumento=this.paciente.persona.tipoDeIdentificacion;

    })
  }
  open() {
    this.router.navigateByUrl("/ver-historial");
  }
  delete(codigo: string) {
    let response;
    this.pacienteService.delete(codigo).subscribe(r => {
      response = r;
      if (!response.Error) {
        this.visible = true;
        this.router.navigateByUrl("/pacientes-consulta");
      }
    })
  }
  update(){
    let response;
    
    this.pacienteService.update(this.paciente).subscribe(r=>{
      response=r
      if(!response.Error){
        this.visible=true;
        this.mensajee="Modificado Correctamente"
      }
    })
  }

}
