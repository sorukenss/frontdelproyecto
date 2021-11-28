import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-tratamiento',
  templateUrl: './consultar-tratamiento.component.html',
  styleUrls: ['./consultar-tratamiento.component.css']
})
export class ConsultarTratamientoComponent implements OnInit {
  first = 0;

  rows = 10;
  personas:any[] = [];
  constructor() {
    
   }

  ngOnInit(): void {
    this.personas=[
      {identificacion:'1234', nombre:'Everth', apellido:'Llanos', edad:'20'},
      {identificacion:'4321', nombre:'Isaac', apellido:'Pimienta', edad:'30'},
      {identificacion:'2222', nombre:'Iván', apellido:'Mendoza', edad:'50'}
    ]
  }

}
