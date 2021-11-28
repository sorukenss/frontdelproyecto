import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
@Component({
  selector: 'app-mostrar-paciente',
  templateUrl: './mostrar-paciente.component.html',
  styleUrls: ['./mostrar-paciente.component.css']
})
export class MostrarPacienteComponent implements OnInit {
  visible: boolean = false;

  constructor(private router: Router, private routeActive: ActivatedRoute, private pacienteService: PacienteService) {


  }
  paciente: Paciente;
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
      this.paciente = response.paciente;
     

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
