import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HandleHttpErrorService } from '../@base/handle-http-error-service.service';
import { Tratamiento } from '../models/tratamiento';

const ruta=environment.ruta;
@Injectable({
  providedIn: 'root'
})
export class TratamientoService {
  baseUrl=ruta;
  constructor(private http: HttpClient, private handleErrorService: HandleHttpErrorService) { 


  }

  get():Observable<Tratamiento[]>{
    return this.http.get<Tratamiento[]>(this.baseUrl+"api/Tratamiento").pipe(
      tap(()=>console.log("Consultado correctamente"))
    )
  }
}
