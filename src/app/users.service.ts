import { Injectable } from '@angular/core';
import {Usuariodto} from "./dto/usuariodto";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BehaviorSubject, map, Observable, observable} from "rxjs";
import {TutorDto} from "./dto/tutorDto";
import {TestDto} from "./dto/testDto";
import {TipoUsuarioDto} from "./dto/tipoUsuarioDto";
import {environment} from "../environments/environment";
import {SeccionDto} from "./dto/seccionDto";
import {PreguntasaDto} from "./dto/preguntasaDto";
import {OpcionsaDto} from "./dto/opcionsaDto";
import {EncuestaDto} from "./dto/encuestaDto";
import {UsuarioGrupoDto} from "./dto/usuarioGrupoDto";
import {RespuestaSADto} from "./dto/respuestaSADto";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = "http://localhost:8000/api/"
  private url2: string = "http://localhost:8000/accounts/"
  private currentUserSubject: BehaviorSubject<Usuariodto | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuariodto | null>(null);
  }

  public get currentUserValue(): Usuariodto | null {
    return this.currentUserSubject.value;
  }

  loginUser(username: string, password: string): Observable<Usuariodto> {
    const url = `${this.url2}login/`;
    const body = {
      username: username,
      password: password
    };
    return this.http.post<Usuariodto>(url, body).pipe(
      map(user => {
        // Almacena el usuario en el servicio
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  getGroup(user_id: number): Observable<UsuarioGrupoDto> {
  return this.http.get<UsuarioGrupoDto>(`${this.url}user_group/${user_id}`);
  }
  getEncuesta(usuario_id: number): Observable<EncuestaDto> {
    return this.http.get<EncuestaDto>(`${this.url}encuesta/${usuario_id}`);
  }
  addEncuesta(usuario_id:number, user:EncuestaDto): Observable<EncuestaDto>{
    return this.http.post<EncuestaDto>(`${this.url}encuesta/${usuario_id}`,user);
  }
  addStudent(user:Usuariodto): Observable<Usuariodto>{
    return this.http.post<Usuariodto>(`${this.url2}register/`,user);
  }
  addAdmin(user:Usuariodto): Observable<Usuariodto>{
    return this.http.post<Usuariodto>(`${this.url2}registeradmin/`,user);
  }
  getTutor(): Observable<TutorDto[]>{
    return this.http.get<TutorDto[]>(`${this.url}tutor/`);
  }
  getTutorById(usuario_id:number): Observable<TutorDto>{
    return this.http.get<TutorDto>(`${this.url}usuario/${usuario_id}/tutor/`);
  }
  addTutor(usuario_id:number, user:TutorDto): Observable<TutorDto>{
    return this.http.post<TutorDto>(`${this.url}usuario/${usuario_id}/tutor-create/`,user);
  }
  getUser(): Observable<Usuariodto[]>{
    return this.http.get<Usuariodto[]>(`${this.url}usuarios/`);
  }
  getTipoUsuario(): Observable<any>{
    return this.http.get<any>(`${this.url}tipousuario/`);
  }
  getUserById(id:number): Observable<Usuariodto>{
    return this.http.get<Usuariodto>(`${this.url}user/${id}`);
  }
  addUser(user:Usuariodto): Observable<Usuariodto>{
    return this.http.post<Usuariodto>(`${this.url}usuarios/`,user);
  }
  updateUser(idUsuario:number,user:Usuariodto): Observable<Usuariodto>{
    return this.http.put<Usuariodto>(`${this.url}user/${idUsuario}`,user);
  }
  deleteUser(idUsuario:number): Observable<Usuariodto>{
    return this.http.delete<Usuariodto>(`${this.url}user/${idUsuario}`);
  }
  // log out por el momento deshabilitado
  /*logOut():Observable<any>{
    return this.http.post<any>(`${this.url2}logout/`);
  }
  */
  // test services

  testGet():Observable<any> {
    return this.http.get<any>(`${this.url}test/`);
  }
  test(id:number):Observable<TestDto>{
    return this.http.get<TestDto>(`${this.url}test/${id}`);
  }
  seccionGet():Observable<any>{
    return this.http.get<any>(`${this.url}seccion/`);
  }
  seccion(test_id:number):Observable<SeccionDto>{
    return this.http.get<SeccionDto>(`${this.url}test/seccion/${test_id}`);
  }
  preguntasaGet():Observable<any>{
    return this.http.get<any>(`${this.url}preguntasa/`);
  }
  pregunta_sa(seccion_id:number):Observable<PreguntasaDto>{
    return this.http.get<PreguntasaDto>(`${this.url}test/seccion/pregunta/${seccion_id}`);
  }
  opcionsaGet():Observable<any>{
    return this.http.get<any>(`${this.url}opcionsa/`);
  }
  opcion(pregunta_id:number):Observable<OpcionsaDto>{
    return this.http.get<OpcionsaDto>(`${this.url}test/seccion/pregunta/opcion/${pregunta_id}`);
  }

  getRespuestaSA(usuario_id:number):Observable<RespuestaSADto>{
    return this.http.get<RespuestaSADto>(`${this.url}respuestaSA/${usuario_id}`);
  }

  addRespuestaSA(opcion_id: number, user: {
    opcion_id: number;
    usuario_id: number;
    id_test: number;
    id_pregunta: number;
    valor: number;
    id_apartado: number
  }): Observable<RespuestaSADto>{
    return this.http.post<RespuestaSADto>(`${this.url}respuestaSa/${opcion_id}`,user);
  }
  getRespuestaSAById(usuario_id:number):Observable<RespuestaSADto>{
    return this.http.get<RespuestaSADto>(`${this.url}viewSa/${usuario_id}`);
  }
}
