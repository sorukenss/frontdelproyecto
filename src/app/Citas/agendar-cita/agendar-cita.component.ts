import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agenda } from 'src/app/models/agenda';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit {
  first = 0;

  rows = 10;
  personas:any[] = [];
  date8: Date;
  fecha:string;
  dias = {
    'lunes': [],
    'martes': [],
    'miercoles': [],
    'jueves': [],
    'viernes': [],
    'sabado': [],
    'numero':[]
  };
  constructor( private router: Router, private agendaService: AgendaService,) { }

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
    return this.personas ? this.first === (this.personas.length - this.rows) : true;
  }

  mostrar(){
    this.fecha=this.date8.toLocaleDateString();
    this.fecha=this.fecha.replace('/','_').replace('/','_');
    let fechaBuscar=this.fecha.replace('_','/').replace('_','/');
    this.convertDay(this.date8.getDay(), fechaBuscar);
  } 


  convertDay(dia, fecha){
    var diaConslta;
    if(dia==0){
      alert("No se puede apartar cita los domingos");
    }else if (dia==1){
      diaConslta="lunes";
    } else if (dia==2){
      diaConslta="martes";
    } else if (dia==3){
      diaConslta="miercoles";
    } else if (dia==4){
      diaConslta="jueves";
    } else if (dia==5){
      diaConslta="viernes"
    } else if (dia==6){
      diaConslta="sabado";
    }
    let res;
    this.agendaService.get(diaConslta,fecha).subscribe(result => {
      res=result;
      this.asignarFecha(diaConslta,res.agendas );
    })
  }


  asignarFecha(diaConsulta, agendas : Agenda[]){
    this.dias ={
      'lunes': [],
      'martes': [],
      'miercoles': [],
      'jueves': [],
      'viernes': [],
      'sabado': [],
      'numero':[]
    };
    if(diaConsulta=='lunes'){
      this.dias.lunes=agendas;
      this.dias.numero=agendas;
    } else if(diaConsulta=='martes'){
      this.dias.martes=agendas;
      this.dias.numero=agendas;
    } else if(diaConsulta=='miercoles'){
      this.dias.miercoles=agendas;
      this.dias.numero=agendas;
    } else if(diaConsulta=='jueves'){
      this.dias.jueves=agendas;
      this.dias.numero=agendas;
    } else if(diaConsulta=='viernes'){
      this.dias.viernes=agendas;
      this.dias.numero=agendas;
    } else if(diaConsulta=='sabado'){
      this.dias.sabado=agendas;
      this.dias.numero=agendas;
    }

  }

  isFirstPage(): boolean {
    return this.personas ? this.first === 0 : true;
  }

}
