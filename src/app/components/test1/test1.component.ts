import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";

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
  constructor(private usersService: UsersService) {
    this.contadorArray = Array.from({length: 5}, (_, index) => index);

  }

  ngOnInit(): void {
    this.getSeccion();
    this.getPregunta();
    this.getOpcion();
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
    // Carga la siguiente pregunta
    this.pregunta_actual = this.pregunta[index];
    // Carga las nuevas opciones
    this.respuesta ='';
    // post de almacenamiento de respuesta
    this.usersService.addRespuestaSA(this.opciones_actual.id, {
      id_test: 1,
      id_apartado: 1,
      id_pregunta: this.pregunta_actual.id,
      valor: 0,
      opcion_id: this.opciones_actual.id,
      usuario_id: 1
    }).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.error('Error al almacenar la respuesta:', error);
    });
    this.usersService.opcion(index + 1).subscribe((data) => {
      this.opciones_actual = data;
    }, (error) => {
      console.error('Error al obtener las opciones:', error);
    });
  }


}
