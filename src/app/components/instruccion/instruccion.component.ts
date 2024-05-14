import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-instruccion',
  templateUrl: './instruccion.component.html',
  styleUrls: ['./instruccion.component.css']
})
export class InstruccionComponent implements OnInit {
  session: any;
  contadorArray: number[];
  test: any;
  seccion: any;
  pregunta: any;
  opcion: any;
  constructor(private usersService: UsersService, private route: ActivatedRoute) {
    this.contadorArray = Array.from({length: 5}, (_, index) => index);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const testParam = params['test'];
      const seccionParam = params['seccion'];
      const preguntaParam = params['pregunta'];
      const opcionParam = params['opcion'];

      this.getTest(testParam);
      this.getSeccion(seccionParam);
      this.getPregunta(preguntaParam);
      this.getOpcion(opcionParam);
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
  getTest(testParam: number): void {
    this.usersService.test(testParam).subscribe((data) => {
        this.test = data;
        console.log(this.test);
      },
      (error) => {
        console.error('Error al obtener el test:', error);
      }
    );
  }
  getSeccion(seccionParam: number): void {
    this.usersService.seccion(seccionParam).subscribe((data) => {
        this.seccion = data;
        console.log(this.seccion);
      },
      (error) => {
        console.error('Error al obtener la seccion:', error);
      }
    );
  }
  getPregunta(preguntaParam: number): void {
    this.usersService.pregunta_sa(preguntaParam).subscribe((data) => {
        this.pregunta = data;
        console.log(this.pregunta);
      },
      (error) => {
        console.error('Error al obtener la seccion:', error);
      }
    );
  }
  getOpcion(opcionParam:number): void {
    this.usersService.opcion(opcionParam).subscribe((data) => {
        this.opcion = data;
        console.log(this.opcion);
      },
      (error) => {
        console.error('Error al obtener la seccion:', error);
      }
    );
  }



}
