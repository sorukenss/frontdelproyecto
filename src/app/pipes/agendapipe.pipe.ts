import { Pipe, PipeTransform } from '@angular/core';
import { Agenda } from '../models/agenda';

@Pipe({
  name: 'agendapipe'
})
export class AgendapipePipe implements PipeTransform {

  transform(agendas: Agenda[], filtro:any[]): any {
    return agendas;
  }

}
