import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../../users.service";
import {Router} from "@angular/router";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-menu-student',
  templateUrl: './menu-student.component.html',
  styleUrls: ['./menu-student.component.css', './../../estilos/estilos1.css']
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
  valor: any;
  prediccion: any;
  showButton = false;
  isVerbalTestSelected = false;
  test1Enabled = false;
  test2Enabled = false;
  test3Enabled = false;
  test4Enabled = false;
  test5Enabled = false;
  test6Enabled = false;
  test7Enabled = false;
  test8Enabled = false;
  test9Enabled = false;

  constructor(private changeDetector: ChangeDetectorRef,private usersService: UsersService, private router: Router) { }


  ngOnInit(): void {
    this.getSession();
  }
  getSession(): void {
    this.usersService.getSession().subscribe(
      data => {
        this.session = data;
        console.log(this.session);
        this.test1Enabled = this.session.test1;
        this.test2Enabled = this.session.test2;
        this.test3Enabled = this.session.test3;
        this.test4Enabled = this.session.test4;
        this.test5Enabled = this.session.test5;
        this.test6Enabled = this.session.test6;
        this.test7Enabled = this.session.test7;
        this.test8Enabled = this.session.test8;
        this.test9Enabled = this.session.test9;
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
    this.valor = 2;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion, valor: this.valor } });
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
    this.valor = 3;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion, valor: this.valor } });
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
    this.valor = 4;
    this.router.navigate(['/instruccion_grafico'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion, valor: this.valor} });
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
    this.valor = 5;
    this.router.navigate(['/instruccion_grafico'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion, valor: this.valor } });
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
    this.valor = 6;
    this.router.navigate(['/instruccion_grafico'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion, valor: this.valor } });
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
    this.valor = 7;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion, valor: this.valor } });
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
    this.valor = 8;
    this.router.navigate(['/instrucciones'], { queryParams: { test: this.test, seccion: this.seccion, pregunta: this.pregunta, opcion: this.opcion, lenght: this.lenght, posicion: this.posicion, valor: this.valor } });
  }

  getPrediccion(): void {
    this.usersService.getPrediccion(this.session.id).subscribe(data => {
      this.prediccion = data;
      console.log(this.prediccion)
      this.showButton = this.prediccion[0].includes('Sistemas');
    });
  }

}
