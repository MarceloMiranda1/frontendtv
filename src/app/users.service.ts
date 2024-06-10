import { Injectable } from '@angular/core';
import {Usuariodto} from "./dto/usuariodto";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
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
import {PreguntaippDto} from "./dto/preguntaippDto";
import {RespuestaIppDto} from "./dto/respuestaIppDto";
import {OpcionIppDto} from "./dto/opcionIppDto";
import {PreguntahspqDto} from "./dto/preguntahspqDto";
import {OpcionHspqDto} from "./dto/opcionHspqDto";
import {RespuestaHspqDto} from "./dto/respuestaHspqDto";
import {TotalDto} from "./dto/totalDto";


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

  getToken(): string | null {
    return localStorage.getItem('access');
  }
  getSession(): Observable<any> {
    let token = this.getToken();
    console.log('entre')
    // Comprueba si el token es null o undefined
    if (!token) {
      console.error('Token is null or undefined');
    }
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(`${this.url2}session/`, { headers: headers });
  }

  loginUser(username: string, password: string): Observable<Usuariodto> {
  const url = `${this.url2}login/` ;
  const body = {
    username: username,
    password: password
  };
    console.log('exitoso1');

    return this.http.post<Usuariodto>(url, body).pipe(
    map(user => {
      console.log(user);
      console.log('exitoso2');
      if (user.token.access && user.token.refresh){
        localStorage.setItem('access', user.token.access);
        localStorage.setItem('refresh', user.token.refresh);
        console.log('exitoso');
        this.getSession();
      }
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
  logOut(): void {
    // Elimina el token del almacenamiento local
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    // Aquí puedes redirigir al usuario a la página de inicio de sesión o realizar otras tareas de limpieza
  }

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
  pregunta_sa(seccion_id:number):Observable<PreguntasaDto[]>{
  return this.http.get<PreguntasaDto[]>(`${this.url}test/seccion/pregunta/${seccion_id}`);
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
  let token = this.getToken();
  if (!token) {
    console.error('Token is null or undefined');
  }
  let headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
  });
  return this.http.post<RespuestaSADto>(`${this.url}respuestaSa/${opcion_id}`, user, { headers: headers });
}
  getTotalRespuestaSA(usuario_id:number):Observable<TotalDto>{
    return this.http.get<TotalDto>(`${this.url}user/${usuario_id}/test-results/`);
  }
  getConversion(usuario_id:number):Observable<TotalDto>{
    return this.http.get<TotalDto>(`${this.url}user/${usuario_id}/conversion/`);
  }

  getRespuestaSAById(usuario_id:number):Observable<RespuestaSADto>{
    return this.http.get<RespuestaSADto>(`${this.url}viewSa/${usuario_id}`);
  }
  getRespuestaSAByIdSeccion(usuario_id:number, id_apartado:number):Observable<RespuestaSADto>{
    return this.http.get<RespuestaSADto>(`${this.url}list_answers/${usuario_id}/${id_apartado}`);
  }

  getPercentil(usuario_id:number, id_apartado:number):Observable<RespuestaSADto>{
    return this.http.get<RespuestaSADto>(`${this.url}test_results/${usuario_id}/${id_apartado}`);
  }

  preguntaIppGet(test_id:number):Observable<PreguntaippDto[]>{
    return this.http.get<PreguntaippDto[]>(`${this.url}test/preguntaIpp/${test_id}`);
  }
  opcionIpp():Observable<any>{
    return this.http.get<any>(`${this.url}opcionIpp/`);
  }
  addRespuestaIpp(opcion_id: number, pregunta_id: number, user: {
    id_test: number;
    valor: number;
    categoria: string;
    seccion: number;
    usuario_id: number;
    pregunta_id: number;
    opcion_id: number;
  }): Observable<RespuestaIppDto>{
    let token = this.getToken();
    if (!token) {
      console.error('Token is null or undefined');
    }
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<RespuestaIppDto>(`${this.url}respuestaIpp/${pregunta_id}/${opcion_id}`, user, { headers: headers });
  }
  getRespuestaIpp(usuario_id:number):Observable<RespuestaIppDto>{
    return this.http.get<RespuestaIppDto>(`${this.url}viewIpp/${usuario_id}`);
  }
  getSumaPercentilIpp(usuario_id:number):Observable<RespuestaIppDto>{
    return this.http.get<RespuestaIppDto>(`${this.url}user/${usuario_id}/section_sum/`);
  }
  // HSPQ
  getPreguntaHspq():Observable<any>{
    return this.http.get<any>(`${this.url}test/preguntaHspq/`);
  }
  getPreguntaHspqById(test_id:number):Observable<PreguntahspqDto[]>{
    return this.http.get<PreguntahspqDto[]>(`${this.url}test/preguntaHspq/${test_id}`);
  }
  getOptionHspqById(pregunta_id:number):Observable<OpcionHspqDto>{
    return this.http.get<OpcionHspqDto>(`${this.url}opcionHspq/${pregunta_id}`);
  }
  getOpcionHspq():Observable<any>{
    return this.http.get<any>(`${this.url}opcionHspq/`);
  }
  addRespuestaHspq(opcion_id:number, user:{
    id_test: number;
    id_pregunta: number;
    valor: number;
    seccion: string;
    usuario_id: number;
    opcion_id: number;
  }): Observable<RespuestaIppDto>{
    let token = this.getToken();
    if (!token) {
      console.error('Token is null or undefined');
    }
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<RespuestaIppDto>(`${this.url}respuestaHspq/${opcion_id}`, user, { headers: headers });
  }
  getRespuestaHspq(usuario_id:number):Observable<RespuestaIppDto>{
    return this.http.get<RespuestaIppDto>(`${this.url}viewHspq/${usuario_id}`);
  }
  getDecatipo(usuario_id:number):Observable<RespuestaHspqDto>{
    return this.http.get<RespuestaHspqDto>(`${this.url}user/${usuario_id}/section_sumHspq/`);
  }


}
