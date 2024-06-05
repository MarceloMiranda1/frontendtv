import { Component, OnInit } from '@angular/core';
import {Usuariodto} from "../../dto/usuariodto";
import {UsersService} from "../../users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  public progress: number = 0;
  contadorArray: number[];
  seccion: any;
  pregunta: any;
  opcion: any;
  pregunta_actual: any;
  opciones_actual: any;
  respuesta = '';
  usuarioActual: Usuariodto | null;
  session: any;
  test: any;


  preguntaIndex = 0;

  constructor(private usersService: UsersService,private route: ActivatedRoute, private router: Router) {
    this.contadorArray = Array.from({length: 3}, (_, index) => index);
    this.usuarioActual = this.usersService.currentUserValue;
  }

  ngOnInit(): void {
    this.getTest()
    this.getSession();
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
  getTest(): void {
    this.usersService.test(3).subscribe((data) => {
        this.test = data;
        console.log(this.test);
      },
      (error) => {
        console.error('Error al obtener el test:', error);
      }
    );
  }


  getPregunta(): void {
    this.usersService.getPreguntaHspqById(3).subscribe((data) => {
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
    this.usersService.getOptionHspqById(1).subscribe((data) => {
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
    this.usersService.addRespuestaHspq(parseInt(this.respuesta), {
      id_test: 3,
      id_pregunta: this.pregunta_actual.id,
      valor: parseInt(valor),
      seccion: this.pregunta_actual.seccion,
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
        this.progress = Math.floor((this.preguntaIndex / this.pregunta.length) * 100);
        this.usersService.getOptionHspqById(this.pregunta_actual.id).subscribe((data) => {
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
