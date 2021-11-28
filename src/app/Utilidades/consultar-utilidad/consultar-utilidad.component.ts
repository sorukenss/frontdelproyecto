import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-utilidad',
  templateUrl: './consultar-utilidad.component.html',
  styleUrls: ['./consultar-utilidad.component.css']
})
export class ConsultarUtilidadComponent implements OnInit {
  value:Date;
  first = 0;

  rows = 10;
  utilidades:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.utilidades=[
      {codigodecita:'1', identificacion:'123', fecha:'10/10/2021',hora:'10:00',valor:'50000'},
      {codigodecita:'2', identificacion:'456', fecha:'10/10/2021',hora:'16:00',valor:'60000'},
      
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
    return this.utilidades ? this.first === (this.utilidades.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.utilidades ? this.first === 0 : true;
  }
  }


