import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { ActivatedRoute } from '@angular/router';
import { Citas } from 'src/app/models/citas';
import { Paciente } from 'src/app/models/paciente';
import { Correo } from 'src/app/models/correo';
import { Tratamiento } from 'src/app/models/tratamiento';
import { Medicamento } from 'src/app/models/medicamento';
import { psicologo } from 'src/app/models/psicologo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/@base/modal/modal.component';
@Component({
  selector: 'app-atender-citas',
  templateUrl: './atender-citas.component.html',
  styleUrls: ['./atender-citas.component.css'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class AtenderCitasComponent implements OnInit {

  activeState: boolean[] = [true, false, false];

  constructor(private messageService: MessageService, private modalService: NgbModal,private routeActive: ActivatedRoute,private router: Router, private citaService: CitaService) { }

  
  first = 0;

  rows = 10;
  historial:any[] = [];
  link : '';
  Id:'';
  cita: Citas;
  paciente: Paciente;
  correo: Correo;
  tratamiento : Tratamiento;
  medicamento: Medicamento;
  medicamentos: Medicamento[] = [];
  psicologo: psicologo;
  ngOnInit(): void {
    const id = this.routeActive.snapshot.params.id;
    this.Id = id;
    this.getById();
    this.correo = new Correo();
    this.medicamento=new Medicamento();
    this.tratamiento=new Tratamiento();
    this.psicologo= new psicologo();
    this.historial=[
      {fecha:'27/09/2021', doctor:'Everth', causa:'Covid'},
      {fecha:'27/09/2021', doctor:'Isaac', causa:'Gripa'},
      {fecha:'28/10/2021', doctor:'Iván', causa:'Hola'}
    ]
  }
  open(){
    this.router.navigateByUrl("/ver-historia");
  }

  send(){
    let response;
    this.correo.persona=this.paciente.persona;
    this.correo.link=this.link;
    this.citaService.sendEmail(this.correo).subscribe((r) => {
      response = r;
    })
  }

  

  agregarMedicamento(){
    this.medicamentos.push(this.medicamento);
    alert("Medicamento agregado");
  }

  revisar(){
    let response;
    this.tratamiento.medicamentos=this.medicamentos;
    this.cita.tratamiento=this.tratamiento;
    this.cita.duracion=10;
    this.cita.psicologo=this.psicologo;
    this.cita.paciente=this.paciente;
    debugger
    this.citaService.atender(this.cita).subscribe((r) => {
      response = r;
      const messageBox = this.modalService.open(ModalComponent);
        messageBox.componentInstance.title = "Resultado";
        messageBox.componentInstance.cuerpo = "Info: " + response.mensaje;
    })
  }

  getById(){
    let response;
    this.citaService.getById(this.Id).subscribe((r) => {
      response = r;
      this.paciente=response.cita.paciente;
      this.psicologo=response.cita.psicologo;
      this.cita=response.cita;
      debugger
    })
  }


}
