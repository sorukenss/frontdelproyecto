import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Citas } from 'src/app/models/citas';
import { Historial } from 'src/app/models/historial';

import { HistorialServiceService } from 'src/app/services/historialservice.service';
@Component({
  selector: 'app-ver-historial',
  templateUrl: './ver-historial.component.html',
  styleUrls: ['./ver-historial.component.css']
})
export class VerHistorialComponent implements OnInit {
  first = 0;

  rows = 10;
  historial:any[] = [];
  historiall : Historial;
  Id:'';
  citas : Citas[] = []
  constructor(private router: Router, private historialService: HistorialServiceService,private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routeActive.snapshot.params.id;
    this.Id = id;
    this.getHistoriales();
    this.historial=[
      {fecha:'27/09/2021', doctor:'Everth', causa:'Covid'},
      {fecha:'27/09/2021', doctor:'Isaac', causa:'Gripa'},
      {fecha:'28/10/2021', doctor:'Iván', causa:'Hola'}
    ]
  }

  getHistoriales(){
    let response;
    this.historialService.getHistoriales(this.Id).subscribe((r) => {
      response = r;
      this.historiall=response.historial;
      debugger
      this.citas=response.historial.citas;
    })
  }

  next() {
    this.first = this.first + this.rows;
  }
  open(){
    this.router.navigateByUrl("/ver-historia");
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.historial ? this.first === (this.historial.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.historial ? this.first === 0 : true;
  }

}
