import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error-service.service';
import { Paciente } from '../models/paciente';
import {environment} from 'src/environments/environment';
const ruta=environment.ruta;
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  baseUrl=ruta;
  
  constructor(private http: HttpClient, private handleErrorService: HandleHttpErrorService) { }

  post(paciente : Paciente) : Observable<Paciente> {
    return this.http.post<Paciente>(this.baseUrl+"api/Paciente" ,paciente).pipe(
      tap(_=>this.handleErrorService.handleError<Paciente>("Paciente registrado", null)));
  }

  get():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.baseUrl+"api/Paciente").pipe(
      tap(()=>console.log("Consultado correctamente"))
    )
  }
  getById(id : string):Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.baseUrl+"api/Paciente/id?identificacion="+id).pipe(
      tap(()=>console.log("Consultado correctamente"))
    )}

  delete(codigo: String){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      
    };
    return this.http.put(this.baseUrl+"api/Paciente"+"/"+codigo, httpOptions).pipe(
      tap(()=>console.log("Eliminado correctamente"))
    )
  }
  update(paciente: Paciente){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      
    };
    return this.http.put(this.baseUrl+"api/Paciente"+"/paciente", paciente, httpOptions).pipe(
      tap(()=>console.log("Modificado correctamente"))
    )
  }
}
