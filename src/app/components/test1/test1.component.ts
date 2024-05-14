import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {HttpHeaders, HttpUserEvent} from "@angular/common/http";
import {Usuariodto} from "../../dto/usuariodto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  contadorArray: number[];
  seccion: any;
  pregunta: any;
  opcion: any;
  pregunta_actual: any;
  opciones_actual: any;
  respuesta = '';
  usuarioActual: Usuariodto | null;
  session: any;

  constructor(private usersService: UsersService, private router: Router) {
    this.contadorArray = Array.from({length: 5}, (_, index) => index);
    this.usuarioActual = this.usersService.currentUserValue;
  }

  ngOnInit(): void {
    this.getSession();
    this.getSeccion();
    this.getPregunta();
    this.getOpcion();
  }

  getSession(): void {
    this.usersService.getSession().subscribe(
      data => {
        this.session = data;
        console.log(this.session);
      },
      error => {
        console.error('Error al obtener la session:', error);
      }
    );
  }

  getSeccion(): void {
    this.usersService.seccion(1).subscribe((data) => {
        this.seccion = data;
        console.log(this.seccion);
      },
      (error) => {
        console.error('Error al obtener la seccion:', error);
      }
    );
  }

  getPregunta(): void {
    this.usersService.pregunta_sa(1).subscribe((data) => {
        this.pregunta = data;
        this.pregunta_actual = this.pregunta[1];
        console.log(this.pregunta);
      },
      (error) => {
        console.error('Error al obtener la seccion:', error);
      }
    );
  }

  getOpcion(): void {
    this.usersService.opcion(2).subscribe((data) => {
        this.opcion = data;
        this.opciones_actual = data;
        console.log(this.opcion);
      },
      (error) => {
        console.error('Error al obtener la seccion:', error);
      }
    );
  }

  siguiente(index: number): void {
    console.log(index);
    console.log('Pregunta length:', this.pregunta.length);
    console.log(this.respuesta);
    const [opcionId, valor] = this.respuesta.split('-');
    this.pregunta_actual = this.pregunta[index];
    this.usersService.addRespuestaSA(parseInt(this.respuesta), {
      id_test: 1,
      id_apartado: 1,
      id_pregunta: this.pregunta_actual.id - 1,
      valor: valor === 'true' ? 1 : 0,
      opcion_id: parseInt(opcionId),
      usuario_id: this.session.id
    }).subscribe((data) => {
      console.log(data);
      this.respuesta = '';
    }, (error) => {
      console.error('Error al almacenar la respuesta:', error);
    });
    if(index === this.pregunta.length - 1){
      // Si es la última pregunta, navega a la nueva página
      this.router.navigate(['/mensaje']);
    } else {

      // Si no es la última pregunta, carga la siguiente pregunta
      this.usersService.opcion(index + 1).subscribe((data) => {
        this.opciones_actual = data;
      }, (error) => {
        console.error('Error al obtener las opciones:', error);
      });
    }
  }
}
