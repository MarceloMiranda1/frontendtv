import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableExporterDirective} from "mat-table-exporter";
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {RespuestaSADto} from "../../../dto/respuestaSADto";
import {TestDto} from "../../../dto/testDto";
import {SeccionDto} from "../../../dto/seccionDto";
import {PreguntasaDto} from "../../../dto/preguntasaDto";
import {OpcionsaDto} from "../../../dto/opcionsaDto";
import {UsersService} from "../../../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {GraficaTestComponent} from "../../grafica-test/grafica-test.component";
import {RespuestaIppDto} from "../../../dto/respuestaIppDto";
import {PreguntaippDto} from "../../../dto/preguntaippDto";
import {OpcionIppDto} from "../../../dto/opcionIppDto";
import {GraficaIppComponent} from "../../grafica-ipp/grafica-ipp.component";

@Component({
  selector: 'app-informacion-ipp',
  templateUrl: './informacion-ipp.component.html',
  styleUrls: ['./informacion-ipp.component.css']
})
export class InformacionIppComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTableExporterDirective) exporter: MatTableExporterDirective | undefined;
  routerSubscription: Subscription | null = null;

  dataSource: MatTableDataSource<RespuestaIppDto> = new MatTableDataSource<RespuestaIppDto>([]);
  displayedColumns: string[] = ['Pregunta', 'Categoria', 'Opcion', 'Valor'];

  users: any;
  percentil: any;
  respuestas: any;
  test: TestDto[] = [];
  pregunta: PreguntaippDto[] = [];
  opcion: OpcionIppDto[] = [];
  id_usuario: any;
  prediccion: any;


  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getPrediccion();

  }
  ngOnInit(): void {
    this.routerSubscription = this.route.params.subscribe(() => {
      this.id_usuario = this.route.snapshot.params['usuario_id'];
      this.loadData();
    });
    const fileName = `${this.users.first_name}_${this.users.last_name}_Informe_Ipp`;
    this.exporter?.exportTable('xlsx', {fileName});
  }
  loadData(): void {
    this.usersService.getUserById(this.id_usuario).subscribe(data => {
      this.users = data;
      console.log(data);
    });
    this.loadRespuestas()
    this.loadTest();
    this.loadPregunta();
    this.loadOpcion();
    this.getPercentil();
  }

  loadRespuestas(): void {
    this.usersService.getRespuestaIpp(this.id_usuario).subscribe(data => {
      this.respuestas = data;
      console.log(data)
      this.dataSource = new MatTableDataSource<RespuestaIppDto>(this.respuestas);
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
  loadPregunta(): void {
    this.usersService.preguntaIppGet(2).subscribe(data => {
      this.pregunta = data
      console.log(data)
    });
  }
  getPreguntaName(id_pregunta: number): string {
    const pregunta = this.pregunta.find(pregunta => pregunta.id === id_pregunta);
    return pregunta ? pregunta.texto_pregunta : '';
  }
  loadOpcion(): void {
    this.usersService.opcionIpp().subscribe(data => {
      this.opcion = data
      console.log(data)
    });
  }
  getOpcionName(id_opcion: number): string {
    const opcion = this.opcion.find(opcion => opcion.id === id_opcion);
    return opcion ? opcion.inciso : '';
  }

  getPercentil(): void {
    this.usersService.getSumaPercentilIpp(this.id_usuario).subscribe(data => {
      this.percentil = data;
      console.log(data);
    });
  }
  getPrediccion(): void {
    this.usersService.getPrediccion(this.id_usuario).subscribe(data => {
      this.prediccion = data;
      console.log(data);
    });
  }

  openChartDialog(): void {
  this.dialog.open(GraficaIppComponent, {
    width: '100%',
    height: '90%',
    data: {
      percentil: this.percentil
    }
  });
}

  onPageChange(event: any): void {
    this.loadRespuestas();
  }
  formatPrediction(prediccion: any): string {
    if (!prediccion) {
      return '-';
    }

    let strPrediccion = prediccion.toString();
    return strPrediccion.replace(//g, '-');
  }


}
