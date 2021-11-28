import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';


@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  first = 0;

  rows = 10;
  paciente: Paciente[] = [];
  searchText: string;

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.get();
  }
  get() {
    let response;
    this.pacienteService.get().subscribe(r => {
      response = r;
      this.paciente = response.pacientes;

    })
  }
  delete(codigo : string){
   
    this.pacienteService.delete(codigo).subscribe(r=>{
      
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
    return this.paciente ? this.first === (this.paciente.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.paciente ? this.first === 0 : true;
  }

}
