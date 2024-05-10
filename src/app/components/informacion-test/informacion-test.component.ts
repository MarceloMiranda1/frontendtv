import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Usuariodto} from "../../dto/usuariodto";
import {TipoUsuarioDto} from "../../dto/tipoUsuarioDto";
import {UsersService} from "../../users.service";
import {RespuestaSADto} from "../../dto/respuestaSADto";
import {ActivatedRoute, Router} from "@angular/router";
import {TestDto} from "../../dto/testDto";
import {SeccionDto} from "../../dto/seccionDto";
import {PreguntasaDto} from "../../dto/preguntasaDto";
import {OpcionsaDto} from "../../dto/opcionsaDto";

@Component({
  selector: 'app-informacion-test',
  templateUrl: './informacion-test.component.html',
  styleUrls: ['./informacion-test.component.css']
})
export class InformacionTestComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<RespuestaSADto> = new MatTableDataSource<RespuestaSADto>([]);
  displayedColumns: string[] = ['Test', 'Apartado', 'Pregunta', 'Opcion', 'Valor'];

  users: any;
  respuestas: any;
  test: TestDto[] = [];
  apartado: SeccionDto[] = [];
  pregunta: PreguntasaDto[] = [];
  opcion: OpcionsaDto[] = [];
  id_usuario: any;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id_usuario = this.route.snapshot.params['usuario_id']
    this.usersService.getUserById(this.id_usuario).subscribe(data => {
      this.users = data;
      console.log(data);
      });
    this.loadRespuestas()
    this.loadTest();
    this.loadApartado();
    this.loadPregunta();
    this.loadOpcion()
  }
  loadRespuestas(): void {
    this.usersService.getRespuestaSAById(this.id_usuario).subscribe(data => {
      this.respuestas = data;
      console.log(data)
      this.dataSource = new MatTableDataSource<RespuestaSADto>(this.respuestas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  loadTest(): void {
    this.usersService.testGet().subscribe(data => {
      this.test = data;
      console.log(data)
    });
  }

  getTestName(id_test: number): string {
    const test = this.test.find(test => test.id === id_test);
    return test ? test.nombre : '';
  }

  loadApartado(): void {
    this.usersService.seccionGet().subscribe(data => {
      this.apartado = data;
      console.log(data)
    });
  }
  getSeccionName(id_seccion: number): string {
    const seccion = this.apartado.find(seccion => seccion.id === id_seccion);
    return seccion ? seccion.nombre : '';
  }
  loadPregunta(): void {
    this.usersService.preguntasaGet().subscribe(data => {
      this.pregunta = data
      console.log(data)
    });
  }
  getPreguntaName(id_pregunta: number): string {
    const pregunta = this.pregunta.find(pregunta => pregunta.id === id_pregunta);
    return pregunta ? pregunta.texto_pregunta : '';
  }
  loadOpcion(): void {
    this.usersService.opcionsaGet().subscribe(data => {
      this.opcion = data
      console.log(data)
    });
  }
  getOpcionName(id_opcion: number): string {
    const opcion = this.opcion.find(opcion => opcion.id === id_opcion);
    return opcion ? opcion.inciso : '';
  }

  onPageChange(event: any): void {
    this.loadRespuestas();
  }

}
