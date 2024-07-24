import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../../users.service";
import {Router} from "@angular/router";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-menu-student',
  templateUrl: './menu-student.component.html',
  styleUrls: ['./menu-student.component.css']
})
export class MenuStudentComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  mensaje = "¡Bienvenida/o a la plataforma de Orientación Vocacional! Estamos emocionados de presentarles un conjunto completo de evaluaciones, que incluye las prestigiosas pruebas de Aptitudes (DAT), Intereses y Preferencias profesionales (IPP) y Rasgos de Personalidad (HSPQ). Este sistema está diseñado para ayudarlos a descubrir sus fortalezas, intereses y personalidad en relación con el mundo profesional y laboral. ¡Prepárense para embarcarse en un viaje emocionante y revelador de autoconocimiento y exploración de carreras!";
  mensaje2 = "¡Esperamos que tengas una excelente jornada de trabajo junto al SOV!." +
    " Estimado/a estudiante, te recordamos algunos aspectos importantes para hoy:"
  mensaje3 = [
    "Este es un espacio de trabajo para ti y para tu futuro, así que pon empeño a tu trabajo.",
    "Para mantener un ambiente propicio, te pedimos que guardes silencio mientras trabajamos juntos en el aula, así todos podemos concentrarnos.",
    "Por favor, apaga o guarda tu celular para mantener el orden y la concentración.",
    "Sigue las instrucciones de la persona a cargo.",
    "Si tienes alguna duda, urgencia o necesitas atención, no dudes en levantar la mano y nuestro equipo estará encantado de ayudarte.",
    "Asegúrate de utilizar el tiempo asignado de manera eficiente y eficaz."
  ];
  mensaje4 = "¡Disfruta del momento y concéntrate al máximo!" +
    " Con todo cariño," +
    "    El equipo SOV (Servicio de Orientación Vocacional)"
  session: any;
  test: any;
  seccion: any;
  pregunta: any;
  opcion: any;
  posicion: any;
  lenght: any;
  prediccion: any;
  showButton = false;
  isVerbalTestSelected = false;

  constructor(private changeDetector: ChangeDetectorRef,private usersService: UsersService, private router: Router) { }


  ngOnInit(): void {
    this.getSession();
  }
  getSession(): void {
    this.usersService.getSession().subscribe(
      data => {
        this.session = data;
        console.log(this.session);
        this.getPrediccion();
      },
      error => {
        console.error('Error al obtener la session:', error);
      }
    );
  }
  logout(): void {
    this.usersService.logOut();
    this.router.navigate(['/login_students']);
  }

  onButtonClick(): void {
    if (this.trigger.menuOpen) {
      this.trigger.closeMenu();
    } else {
      this.trigger.openMenu();
    }
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 1;
    this.opcion = 1;
    this.lenght = 5;
    this.posicion = 0;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion } });
  }
  onSecondButtonClick(): void {
    if (this.trigger.menuOpen) {
      this.trigger.closeMenu();
    } else {
      this.trigger.openMenu();
    }
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 2;
    this.opcion = 12;
    this.lenght = 5;
    this.posicion = 1;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion  } });
  }
  onThirdButtonClick(): void {
    if (this.trigger.menuOpen) {
      this.trigger.closeMenu();
    } else {
      this.trigger.openMenu();
    }
    this.isVerbalTestSelected = true;
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 3;
    this.opcion = 83;
    this.lenght = 5;
    this.posicion = 2;
    this.router.navigate(['/instruccion_grafico'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion} });
  }
  onFourthButtonClick(): void {
    if (this.trigger.menuOpen) {
      this.trigger.closeMenu();
    } else {
      this.trigger.openMenu();
    }
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 4;
    this.opcion = 124;
    this.lenght = 3;
    this.posicion = 3;
    this.router.navigate(['/instruccion_grafico'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion } });
  }
  onFifthButtonClick(): void {
    if (this.trigger.menuOpen) {
      this.trigger.closeMenu();
    } else {
      this.trigger.openMenu();
    }
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 5;
    this.opcion = 185;
    this.lenght = 4;
    this.posicion = 4;
    this.router.navigate(['/instruccion_grafico'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion } });
  }
  onSixthButtonClick(): void {
    if (this.trigger.menuOpen) {
      this.trigger.closeMenu();
    } else {
      this.trigger.openMenu();
    }
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 6;
    this.opcion = 236;
    this.lenght = 4;
    this.posicion = 5;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion } });
  }
  onSeventhButtonClick(): void {
    if (this.trigger.menuOpen) {
      this.trigger.closeMenu();
    } else {
      this.trigger.openMenu();
    }
    this.test = 1;
    this.seccion = 1;
    this.pregunta = 7;
    this.opcion = 277;
    this.lenght = 5;
    this.posicion = 6;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion } });
  }

  getPrediccion(): void {
    this.usersService.getPrediccion(this.session.id).subscribe(data => {
      this.prediccion = data;
      this.showButton = this.prediccion[0] === 'Ingenieria de Sistemas';
    });
  }


}
