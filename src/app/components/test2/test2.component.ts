import { Component, OnInit } from '@angular/core';
import {Usuariodto} from "../../dto/usuariodto";
import {UsersService} from "../../users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  public progress: number = 0;
  contadorArray: number[];
  pregunta: any;
  opcion: any;
  test: any;
  pregunta_actual: any;
  respuesta = '';
  usuarioActual: Usuariodto | null;
  session: any;
  preguntaIndex = 0;

  constructor(private usersService: UsersService,private route: ActivatedRoute, private router: Router) {
    this.contadorArray = Array.from({length: 4}, (_, index) => index);
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
    this.usersService.test(2).subscribe((data) => {
        this.test = data;
        console.log(this.test);
      },
      (error) => {
        console.error('Error al obtener el test:', error);
      }
    );
  }
  getPregunta(): void {
    this.usersService.preguntaIppGet(2).subscribe((data) => {
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
    this.usersService.opcionIpp().subscribe((data) => {
        this.opcion = data;
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
  this.usersService.addRespuestaIpp(parseInt(this.respuesta), this.pregunta_actual.id,{
    id_test: 2,
    valor: parseInt(valor),
    categoria: this.pregunta_actual.categoria,
    seccion: this.pregunta_actual.seccion,
    usuario_id: this.session.id,
    pregunta_id: this.pregunta_actual.id,
    opcion_id: parseInt(opcionId)
  }).subscribe((data) => {
    console.log(data);
    this.respuesta = '';
    this.preguntaIndex++;
    this.progress = Math.floor((this.preguntaIndex / this.pregunta.length) * 100);
    if(this.preguntaIndex === this.pregunta.length){
      this.router.navigate(['/mensaje']);
    } else {
      this.pregunta_actual = this.pregunta[this.preguntaIndex];
    }
  }, (error) => {
    console.error('Error al almacenar la respuesta:', error);
  });
}


}
