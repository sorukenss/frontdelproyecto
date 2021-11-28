import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { HandleHttpErrorService } from '../@base/handle-http-error-service.service';
import { catchError, map } from 'rxjs/operators';
import {environment} from 'src/environments/environment';
const ruta=environment.ruta;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl=ruta;
  usuario: User;
  constructor(private http: HttpClient, private handleErrorService: HandleHttpErrorService,) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('login')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(password: string, user: string) {
    return this.http.post<any>(this.baseUrl+`api/login/`, { user, password })
      .pipe(
        catchError(this.handleErrorService.handleError<User>('Inicio Sesion', null)),
        map(user => {
          sessionStorage.setItem('login', JSON.stringify(user));
          return user;
        }));
  }

  logout() {
    sessionStorage.removeItem('login');
    this.currentUserSubject.next(null);
  }


  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
}
