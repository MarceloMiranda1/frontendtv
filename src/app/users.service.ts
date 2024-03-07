import { Injectable } from '@angular/core';
import {Usuariodto} from "./dto/usuariodto";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable, observable} from "rxjs";
import {TipoUsuarioDto} from "./dto/tipoUsuarioDto";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = "http://localhost:8000/api/"
  constructor(private http: HttpClient) {  }

  getUser(): Observable<Usuariodto[]>{
    return this.http.get<Usuariodto[]>(`${this.url}usuarios/`);
  }
  getTipoUsuario(): Observable<any>{
    return this.http.get<any>(`${this.url}tipousuario/`);
  }
  getUserById(idUsuario:number): Observable<Usuariodto>{
    return this.http.get<Usuariodto>(`${this.url}usuario/${idUsuario}`);
  }
  addUser(user:Usuariodto): Observable<Usuariodto>{
    return this.http.post<Usuariodto>(`${this.url}usuarios/`,user);
  }
  updateUser(idUsuario:number,user:Usuariodto): Observable<Usuariodto>{
    return this.http.put<Usuariodto>(`${this.url}usuario/${idUsuario}`,user);
  }
  deleteUser(idUsuario:number): Observable<Usuariodto>{
    return this.http.delete<Usuariodto>(`${this.url}usuario/${idUsuario}`)
  }

}
