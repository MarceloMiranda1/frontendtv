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
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  onButtonClick(): void {
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 1;
    this.opcion = 1;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion } });
  }
  onSecondButtonClick(): void {
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 2;
    this.opcion = 1;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion } });
  }

}
