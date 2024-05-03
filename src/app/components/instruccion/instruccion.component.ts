import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";

@Component({
  selector: 'app-instruccion',
  templateUrl: './instruccion.component.html',
  styleUrls: ['./instruccion.component.css']
})
export class InstruccionComponent implements OnInit {
  contadorArray: number[];
  test: any;
  seccion: any;
  pregunta: any;
  opcion: any;
  constructor(private usersService: UsersService) {
    this.contadorArray = Array.from({length: 5}, (_, index) => index);
  }

  ngOnInit(): void {
    this.getTest();
    this.getSeccion();
    this.getPregunta();
    this.getOpcion();
  }

  getTest(): void {
    this.usersService.test(1).subscribe((data) => {
        this.test = data;
        console.log(this.test);
      },
      (error) => {
        console.error('Error al obtener el test:', error);
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
        console.log(this.pregunta);
      },
      (error) => {
        console.error('Error al obtener la seccion:', error);
      }
    );
  }
  getOpcion(): void {
    this.usersService.opcion(1).subscribe((data) => {
        this.opcion = data;
        console.log(this.opcion);
      },
      (error) => {
        console.error('Error al obtener la seccion:', error);
      }
    );
  }



}
