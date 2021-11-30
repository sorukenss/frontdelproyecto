import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrls: ['./consultar-cita.component.css']
})
export class ConsultarCitaComponent implements OnInit {

  first = 0;

  rows = 10;
  pacientes:any[] = [];
  constructor(private citaService:CitaService, private loginService: AuthenticationService) { }

  ngOnInit(): void {
    
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


