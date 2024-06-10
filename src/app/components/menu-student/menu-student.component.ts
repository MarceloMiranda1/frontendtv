import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-student',
  templateUrl: './menu-student.component.html',
  styleUrls: ['./menu-student.component.css']
})
export class MenuStudentComponent implements OnInit {
  mensaje = "¡Bienvenidos al nuevo sistema de pruebas vocacionales! Estamos emocionados de presentarles un conjunto completo de evaluaciones que incluye las prestigiosas pruebas DAT, IPP y HSPQ. Este sistema está diseñado para ayudarlos a descubrir sus fortalezas, intereses y personalidad en relación con el mundo laboral. ¡Prepárense para embarcarse en un viaje de autoconocimiento y exploración de carreras emocionante y revelador!";
  test: any;
  seccion: any;
  pregunta: any;
  opcion: any;
  lenght: any;
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.usersService.logOut();
    this.router.navigate(['/login_students']);
  }
  onButtonClick(): void {
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 1;
    this.opcion = 1;
    this.lenght = 5;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght } });
  }
  onSecondButtonClick(): void {
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 2;
    this.opcion = 12;
    this.lenght = 5;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght  } });
  }
  onThirdButtonClick(): void {
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 3;
    this.opcion = 83;
    this.lenght = 5;
    this.router.navigate(['/instruccion_grafico'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght } });
  }
  onFourthButtonClick(): void {
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 4;
    this.opcion = 124;
    this.lenght = 3;
    this.router.navigate(['/instruccion_grafico'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght } });
  }
  onFifthButtonClick(): void {
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 5;
    this.opcion = 185;
    this.lenght = 4;
    this.router.navigate(['/instruccion_grafico'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght } });
  }
  onSixthButtonClick(): void {
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 6;
    this.opcion = 236;
    this.lenght = 4;
    this.router.navigate(['/instruccion_grafico'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght } });
  }
  onSeventhButtonClick(): void {
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 7;
    this.opcion = 277;
    this.lenght = 5;
    this.router.navigate(['/instruccion_grafico'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght } });
  }


}
