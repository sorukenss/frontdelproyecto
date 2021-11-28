import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/@base/modal/modal.component';
import { psicologo } from 'src/app/models/psicologo';
import { PsicologoService } from 'src/app/services/psicologo.service';

@Component({
  selector: 'app-mostrar-psicologo',
  templateUrl: './mostrar-psicologo.component.html',
  styleUrls: ['./mostrar-psicologo.component.css']
})
export class MostrarPsicologoComponent implements OnInit {

  visible: boolean = false;
  constructor(private router :Router,private routeActive: ActivatedRoute, private psicologoService: PsicologoService,private modalService: NgbModal) { }
  psicologo: psicologo;
  Id: string;
  ngOnInit(): void {
    const id = this.routeActive.snapshot.params.id;
    this.Id = id;
    this.getById();
  }

  getById() {
    let response;
    this.psicologoService.getById(this.Id).subscribe((r) => {
      response=r;
      this.psicologo=response.psicologo;

    })
  }
  delete(codigo: string) {
    let response;
    this.psicologoService.delete(codigo).subscribe(r => {
      response = r;
      if(!response.Error ){
        const messageBox = this.modalService.open(ModalComponent);
        messageBox.componentInstance.title = "Resultado";
        messageBox.componentInstance.cuerpo = "Info: " + response.mensaje;
        this.router.navigateByUrl("/lista-psicologo");
      }
    })
  }
  update(){
    let response;
    
    this.psicologoService.update(this.psicologo).subscribe(r=>{
      response=r
      if(!response.Error){
        const messageBox = this.modalService.open(ModalComponent);
        messageBox.componentInstance.title = "Resultado";
        messageBox.componentInstance.cuerpo = "Info: " + response.mensaje;
  
      }
    })
  }

}
