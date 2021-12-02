import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error-service.service';
import { Agenda } from '../models/agenda';
import { Citas } from '../models/citas';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';
import { Correo } from '../models/correo';
import { Historial } from '../models/historial';
const ruta = environment.ruta;
@Injectable({
  providedIn: 'root'
})
export class HistorialServiceService {
  baseUrl = ruta;
  constructor(private http: HttpClient, private handleErrorService: HandleHttpErrorService) { }

  getHistoriales(id: string): Observable<Historial[]> {
    return this.http.get<Historial[]>(this.baseUrl + "api/Historial?id="+id).pipe(
      tap(() => console.log("Consultado correctamente"))
    )
  }

  getHistorialesById(id: string): Observable<Historial[]> {
    return this.http.get<Historial[]>(this.baseUrl + "api/Historial/id?id="+id).pipe(
      tap(() => console.log("Consultado correctamente"))
    )
  }
}
