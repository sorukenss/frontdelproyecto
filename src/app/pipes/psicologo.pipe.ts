import { Pipe, PipeTransform } from '@angular/core';
import {psicologo} from '../models/psicologo';
@Pipe({
  name: 'FiltroPsicologo'
})
export class PsicologoPipe implements PipeTransform {

  transform(psicologos: psicologo[], searchText: string): any {
    if(searchText==null || searchText ==""){
      return psicologos;
    } else{
      return psicologos.filter(p=>p.codigoPsicologo.includes(searchText));
    }
  }

}
