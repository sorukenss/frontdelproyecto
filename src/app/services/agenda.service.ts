import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error-service.service';
import { Agenda } from '../models/agenda';
import {environment} from 'src/environments/environment';
const ruta=environment.ruta;

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  baseUrl=ruta;
  constructor(private http: HttpClient,private handleErrorService: HandleHttpErrorService) { }

  get(dia:string, fecha:string, especialidad:string):Observable<Agenda[]>{

    return this.http.get<Agenda[]>(this.baseUrl+"api/Agenda/dia?dia="+dia+"&fecha="+fecha+"&especialidad="+especialidad).pipe(
      tap(()=>console.log("Consultado correctamente"))
    )
  }
}
