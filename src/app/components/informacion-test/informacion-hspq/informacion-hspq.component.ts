import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableExporterDirective} from "mat-table-exporter";
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {RespuestaIppDto} from "../../../dto/respuestaIppDto";
import {TestDto} from "../../../dto/testDto";
import {PreguntaippDto} from "../../../dto/preguntaippDto";
import {OpcionIppDto} from "../../../dto/opcionIppDto";
import {UsersService} from "../../../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {GraficaIppComponent} from "../../grafica-ipp/grafica-ipp.component";
import {GraficaTestComponent} from "../../grafica-test/grafica-test.component";
import {RespuestaHspqDto} from "../../../dto/respuestaHspqDto";
import {PreguntahspqDto} from "../../../dto/preguntahspqDto";
import {OpcionHspqDto} from "../../../dto/opcionHspqDto";
import {GraficaHspqComponent} from "../../grafica-hspq/grafica-hspq.component";

@Component({
  selector: 'app-informacion-hspq',
  templateUrl: './informacion-hspq.component.html',
  styleUrls: ['./informacion-hspq.component.css']
})
export class InformacionHspqComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTableExporterDirective) exporter: MatTableExporterDirective | undefined;
  routerSubscription: Subscription | null = null;

  dataSource: MatTableDataSource<RespuestaHspqDto> = new MatTableDataSource<RespuestaHspqDto>([]);
  displayedColumns: string[] = ['Pregunta', 'Seccion', 'Opcion', 'Valor'];

  users: any;
  decatipo: any;
  respuestas: any;
  test: TestDto[] = [];
  pregunta: PreguntahspqDto[] = [];
  opcion: OpcionHspqDto[] = [];
  id_usuario: any;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
  ngOnInit(): void {
    this.routerSubscription = this.route.params.subscribe(() => {
      this.id_usuario = this.route.snapshot.params['usuario_id'];
      this.loadData();
    });
    const fileName = `${this.users.first_name}_${this.users.last_name}_Informe_Hspq`;
    this.exporter?.exportTable('xlsx', {fileName});
  }
  loadData(): void {
    this.usersService.getUserById(this.id_usuario).subscribe(data => {
      this.users = data;
      console.log(data);
    });
    this.loadRespuestas()
    this.loadPregunta()
    this.loadTest();
    this.loadOpcion();
    this.getDecatipo();
  }

  loadRespuestas(): void {
    this.usersService.getRespuestaHspq(this.id_usuario).subscribe(data => {
      this.respuestas = data;
      console.log(data)
      this.dataSource = new MatTableDataSource<RespuestaHspqDto>(this.respuestas);
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
    this.usersService.getPreguntaHspqById(3).subscribe(data => {
      this.pregunta = data
      console.log(data)
    });
  }

  getPreguntaName(id_pregunta: number): string {
    const pregunta = this.pregunta.find(pregunta => pregunta.id === id_pregunta);
    return pregunta ? pregunta.texto_pregunta : '';
  }
  loadOpcion(): void {
    this.usersService.getOpcionHspq().subscribe(data => {
      this.opcion = data
      console.log(data)
    });
  }
  getOpcionName(id_opcion: number): string {
    const opcion = this.opcion.find(opcion => opcion.id === id_opcion);
    return opcion ? opcion.inciso : '';
  }

  getDecatipo(): void {
    this.usersService.getDecatipo(this.id_usuario).subscribe(data => {
      this.decatipo = data;
      console.log(data);
    });
  }


  openChartDialog(): void {
    const arrayData = Object.entries(this.decatipo).map(([key, value]) => ({valor: value}));
    this.dialog.open(GraficaHspqComponent, {
      width: '100%',
      height: '450px',
      data: {
        total: arrayData
      }
    });
  }
  openChartDialogWithoutNumbers(): void {
    const arrayData = Object.entries(this.decatipo).map(([key, value]) => ({valor: value}));

    this.dialog.open(GraficaTestComponent,{
      width: '900px',
      height: '420px',
      data: {
        total: this.decatipo,
        showNumbers: false
      }
    });
  }
  onPageChange(event: any): void {
    this.loadRespuestas();
  }

}
