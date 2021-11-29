import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/@base/modal/modal.component';
import { Citas } from 'src/app/models/citas';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-apartar',
  templateUrl: './apartar.component.html',
  styleUrls: ['./apartar.component.css']
})
export class ApartarComponent implements OnInit {
  data: string;
  datos: string[];
  fecha: string;
  hora: string;
  codigoAgenda: string;
  cita: Citas;
  usuario: User;
  constructor(private routeActive: ActivatedRoute, private citaService: CitaService, private modalService: NgbModal,private loginService: AuthenticationService) {
    this.cita = new Citas();
    let currentUser=this.loginService.currentUserValue;
    this.usuario=currentUser;
  }

  ngOnInit(): void {
    this.data = this.routeActive.snapshot.params.id;
    this.datos = this.data.split('-');
    this.datos[1] = this.datos[1].replace('_', '/').replace('_', '/');
    this.fecha = this.datos[1];
    this.hora = this.datos[2];
    this.codigoAgenda = this.datos[0];
  }

  apartar() {
    let a;
    this.cita.fecha = this.fecha;
    this.cita.hora = (this.hora + "").replace('.', ':');
    this.cita.codigoAgenda = this.codigoAgenda;
    this.cita.idPaciente=this.usuario.idPersona;
    this.citaService.post(this.cita).subscribe((r) => {
      if (r != null) {
        a = r;
        const messageBox = this.modalService.open(ModalComponent);
        messageBox.componentInstance.title = "Resultado";
        messageBox.componentInstance.cuerpo = "Info: " + a.mensaje;
      }
    })
  }



}
