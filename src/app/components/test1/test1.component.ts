import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {HttpHeaders, HttpUserEvent} from "@angular/common/http";
import {Usuariodto} from "../../dto/usuariodto";
import {ActivatedRoute, Router} from "@angular/router";

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
  seccionParam: any;
  preguntaParam: any;
  opcionParam: any;

  preguntaIndex = 1;

  constructor(private usersService: UsersService,private route: ActivatedRoute, private router: Router) {
    this.contadorArray = Array.from({length: 5}, (_, index) => index);
    this.usuarioActual = this.usersService.currentUserValue;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.seccionParam = params['seccion'];
      this.preguntaParam = params['pregunta'];
      this.opcionParam = params['opcion'];

      this.getSession();
      this.getSeccion();
      this.getPreguntaPorSeccion(this.preguntaParam);
      this.getOpcion();
    });
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
    this.usersService.seccion(this.seccionParam).subscribe((data) => {
        this.seccion = data;
        console.log(this.seccion);
      },
      (error) => {
        console.error('Error al obtener la seccion:', error);
      }
    );
  }

  getPreguntaPorSeccion(seccion_id:number): void {
    this.usersService.pregunta_sa(seccion_id).subscribe((data) => {
        this.pregunta = data;
        this.pregunta_actual = this.pregunta[this.preguntaIndex];
        console.log(this.pregunta);
      },
      (error) => {
        console.error('Error al obtener la seccion:', error);
      }
    );
  }

  getOpcion(): void {
    this.usersService.opcion(this.opcionParam).subscribe((data) => {
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
    this.usersService.addRespuestaSA(parseInt(this.respuesta), {
      id_test: 1,
      id_apartado: this.preguntaParam,
      id_pregunta: this.pregunta_actual.id,
      valor: valor === 'true' ? 1 : 0,
      opcion_id: parseInt(opcionId),
      usuario_id: this.session.id
    }).subscribe((data) => {
      console.log(data);
      this.respuesta = '';
      this.preguntaIndex++;
      if(this.preguntaIndex === this.pregunta.length){
        this.router.navigate(['/mensaje']);
      } else {
        this.pregunta_actual = this.pregunta[this.preguntaIndex];
        this.usersService.opcion(this.pregunta_actual.id).subscribe((data) => {
          this.opciones_actual = data;
        }, (error) => {
          console.error('Error al obtener las opciones:', error);
        });
      }
    }, (error) => {
      console.error('Error al almacenar la respuesta:', error);
    });
  }

  }
