import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error-service.service';
import { Agenda } from '../models/agenda';
import { Citas } from '../models/citas';
import {environment} from 'src/environments/environment';
const ruta=environment.ruta;
@Injectable({
  providedIn: 'root'
})
export class CitaService {
  baseUrl=ruta;
  constructor(private http: HttpClient,private handleErrorService: HandleHttpErrorService) { }

  post(cita : Citas) : Observable<Citas> {
    return this.http.post<Citas>(this.baseUrl+"api/Cita" ,cita).pipe(
      tap(_=>this.handleErrorService.handleError<Citas>("Cita apartada", null)));
  }
}
