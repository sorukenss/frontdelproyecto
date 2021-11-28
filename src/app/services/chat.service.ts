import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Chat } from '../models/chat';
import {environment} from 'src/environments/environment';
const ruta=environment.ruta;
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  baseUrl=ruta;

  constructor(private http: HttpClient) { }

  get():Observable<Chat[]>{
    return this.http.get<Chat[]>(this.baseUrl+"api/Chat").pipe(
      tap(()=>console.log("Consultado correctamente"))
    )
  }

  post(chat : Chat) : Observable<Chat> {
    return this.http.post<Chat>(this.baseUrl+"api/Chat" ,chat).pipe(
      tap(()=>console.log("Registrado")));
  }
}
