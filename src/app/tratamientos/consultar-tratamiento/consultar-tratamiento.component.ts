import { Component, OnInit } from '@angular/core';
import {TratamientoService} from 'src/app/services/Tratamiento.service'
@Component({
  selector: 'app-consultar-tratamiento',
  templateUrl: './consultar-tratamiento.component.html',
  styleUrls: ['./consultar-tratamiento.component.css']
})
export class ConsultarTratamientoComponent implements OnInit {
  first = 0;

  rows = 10;
  personas:any[] = [];
 
  constructor(private tratamientoservice:TratamientoService) {
    
   }

  ngOnInit(): void {
    this.get();
    
  }

  get(){
    let response;
    this.tratamientoservice.get().subscribe(r=>{
      response=r;
      this.tratamientoservice=response.tratamientos;
      
    })
    
  }

}
