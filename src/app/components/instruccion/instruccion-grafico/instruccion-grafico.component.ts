import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-instruccion-grafico',
  templateUrl: './instruccion-grafico.component.html',
  styleUrls: ['./instruccion-grafico.component.css']
})
export class InstruccionGraficoComponent implements OnInit {

  session: any;
  contadorArray: number[] = [];
  test: any;
  seccion: any;
  pregunta: any;
  opcion: any;
  testParam: any = "";
  seccionParam: any = "";
  preguntaParam: any = "";
  opcionParam: any = "";
  lenghtParam: any = "";
  posicionParam: any = "";
  opcionEnviar: any = "";
  valorParam: any = "";

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.testParam = params['test'];
      this.seccionParam = params['seccion'];
      this.preguntaParam = params['pregunta'];
      this.opcionParam = params['opcion'];
      this.lenghtParam = params['lenght'];
      this.posicionParam = params['posicion'];
      this.valorParam = params['valor'];

      this.contadorArray = Array.from({length: this.lenghtParam}, (_, index) => index);


      this.getTest(this.testParam);
      this.getSeccion(this.seccionParam);
      this.getPregunta(this.preguntaParam);
      this.getOpcion(this.opcionParam);
      this.isImageUrl(this.pregunta.imagen);
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
        this.opcionEnviar = Number(opcionParam) + 1;

        console.log(this.opcion);
      },
      (error) => {
        console.error('Error al obtener la seccion:', error);
      }
    );
  }
  startTest(){
    this.getSessionAndUpdateTest();
  }
  getSessionAndUpdateTest(): void {
    this.usersService.getSession().subscribe(
      data => {
        this.session = data;
        const testKey = `test${this.valorParam}`;
        const updateData = { [testKey]: true };
        this.usersService.updateTest(this.session.id, updateData).subscribe(
          data => {
            console.log(`${testKey} updated:`, data);
            this.router.navigate(['/pregunta_grafico'], { queryParams: { seccion: this.seccionParam, pregunta: this.preguntaParam, opcion: this.opcionEnviar, lenght: this.lenghtParam, posicion: this.posicionParam } });
          },
          error => {
            console.error(`Error al actualizar ${testKey}:`, error);
          }
        );
      },
      error => {
        console.error('Error al obtener la session:', error);
      }
    );
  }

  isImageUrl(url: string): boolean {
    return /\.(?:jpg|gif|png)$/.test(url);
  }

}
