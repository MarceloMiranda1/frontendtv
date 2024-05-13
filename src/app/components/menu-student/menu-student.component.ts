import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-student',
  templateUrl: './menu-student.component.html',
  styleUrls: ['./menu-student.component.css']
})
export class MenuStudentComponent implements OnInit {
  mensaje = "¡Bienvenidos al nuevo sistema de pruebas vocacionales! Estamos emocionados de presentarles un conjunto completo de evaluaciones que incluye las prestigiosas pruebas DAT, IPP y HSPQ. Este sistema está diseñado para ayudarlos a descubrir sus fortalezas, intereses y personalidad en relación con el mundo laboral. ¡Prepárense para embarcarse en un viaje de autoconocimiento y exploración de carreras emocionante y revelador!";
  constructor() { }

  ngOnInit(): void {
  }

}
