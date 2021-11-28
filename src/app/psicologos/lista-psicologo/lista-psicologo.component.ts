import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/@base/modal/modal.component';
import { psicologo } from 'src/app/models/psicologo';
import { PsicologoService } from 'src/app/services/psicologo.service';

@Component({
  selector: 'app-lista-psicologo',
  templateUrl: './lista-psicologo.component.html',
  styleUrls: ['./lista-psicologo.component.css']
})
export class ListaPsicologoComponent implements OnInit {

  first = 0;

  rows = 10;
  psicologos:psicologo[] = [];
  searchText:string;

  constructor(private psicologoService:PsicologoService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    let response;
    this.psicologoService.get().subscribe(r=>{
      response=r;
      this.psicologos=response.psicologos;
      
    })
    
  }

  delete(codigo : string){
     let response;
    this.psicologoService.delete(codigo).subscribe(r=>{
      response=r;
      if(!response.Error ){
        const messageBox = this.modalService.open(ModalComponent);
        messageBox.componentInstance.title = "Resultado";
        messageBox.componentInstance.cuerpo = "Info: " + response.mensaje;
      }
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
    return this.psicologos ? this.first === (this.psicologos.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.psicologos ? this.first === 0 : true;
  }

}