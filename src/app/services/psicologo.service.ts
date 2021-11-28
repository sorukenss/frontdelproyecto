import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error-service.service';
import { psicologo } from '../models/psicologo';
import {environment} from 'src/environments/environment';
const ruta=environment.ruta;
@Injectable({
  providedIn: 'root'
})
export class PsicologoService {
  baseUrl=ruta;

  constructor(private http: HttpClient,private handleErrorService: HandleHttpErrorService) { 
    
  }
  post(psicologo : psicologo ) : Observable<psicologo> {
   
    return this.http.post<psicologo>(this.baseUrl+"api/Psicologo" ,psicologo).pipe(
      tap(_=>this.handleErrorService.handleError<psicologo>("Psicologo Registrado",null)));
  }

  get():Observable<psicologo[]>{
    return this.http.get<psicologo[]>(this.baseUrl+"api/Psicologo").pipe(
      tap(()=>console.log("Consultado correctamente"))
    )
  }

  getById(id : string):Observable<psicologo[]>{
    return this.http.get<psicologo[]>(this.baseUrl+"api/Psicologo/id?identificacion="+id).pipe(
      tap(()=>console.log("Consultado correctamente"))
    )
  }

  delete(codigo: String){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      
    };
    return this.http.put(this.baseUrl+"api/Psicologo"+"/"+codigo, httpOptions).pipe(
      tap(_=>this.handleErrorService.handleError<psicologo>("Psicologo Eliminado",null)));
    
  }
  update(psicologo: psicologo){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      
    };
    return this.http.put(this.baseUrl+"api/Psicologo"+"/psicologo", psicologo, httpOptions).pipe(
      tap(_=>this.handleErrorService.handleError<psicologo>("Psicologo Modificado",null)));
    
  }



}
