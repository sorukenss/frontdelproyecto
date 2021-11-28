import { Pipe, PipeTransform } from '@angular/core';
import {Paciente} from '../models/paciente';

@Pipe({
  name: 'Filtropaciente'
})
export class PacientePipe implements PipeTransform {

  transform(paciente: Paciente[], searchText:string): any {
    if(searchText==null || searchText ==""){
      return paciente;
    } else{
      return paciente.filter(p=>p.codigoPaciente.includes(searchText));
    }
  }

}
