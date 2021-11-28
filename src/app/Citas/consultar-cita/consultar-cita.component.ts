import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrls: ['./consultar-cita.component.css']
})
export class ConsultarCitaComponent implements OnInit {

  first = 0;

  rows = 10;
  pacientes:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.pacientes=[
      {codigodecita:'1', nombrepsicologo:'jose', tipodecita:'terapia', fecha:'10/10/2021',hora:'10:00',valor:'500'},
      {codigodecita:'2', nombrepsicologo:'jose', tipodecita:'emocional', fecha:'10/11/2021',hora:'14:00',valor:'5000'},
      
    ]
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
    return this.pacientes ? this.first === (this.pacientes.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.pacientes ? this.first === 0 : true;
  }
  }


