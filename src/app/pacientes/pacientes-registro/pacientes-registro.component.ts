import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/models/persona';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service'
import { ModalComponent } from '../../@base/modal/modal.component';
@Component({
  selector: 'app-pacientes-registro',
  templateUrl: './pacientes-registro.component.html',
  styleUrls: ['./pacientes-registro.component.css']
})
export class PacientesRegistroComponent implements OnInit {

  paciente: Paciente;
  persona: Persona;
  visible: boolean = false;
  constructor(private pacienteService: PacienteService, private modalService: NgbModal) {
    this.paciente = new Paciente();
    this.persona = new Persona();
  }

  ngOnInit(): void {
  }

  add() {
    let a;
    this.persona.identification = this.paciente.codigoPaciente;
    this.paciente.persona = this.persona;
    this.pacienteService.post(this.paciente).subscribe((r) => {

      if (r != null) {
        a = r;
        const messageBox = this.modalService.open(ModalComponent);
        messageBox.componentInstance.title = "Resultado";
        messageBox.componentInstance.cuerpo = "Info: " + a.mensaje;
      }


    })


  }

}
