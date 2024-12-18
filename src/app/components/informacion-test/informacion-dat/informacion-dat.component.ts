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
import {TotalDto} from "../../../dto/totalDto";

@Component({
  selector: 'app-informacion-dat',
  templateUrl: './informacion-dat.component.html',
  styleUrls: ['./informacion-dat.component.css']
})
export class InformacionDatComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTableExporterDirective) exporter: MatTableExporterDirective | undefined;
  routerSubscription: Subscription | null = null;

  dataSource: MatTableDataSource<TotalDto> = new MatTableDataSource<TotalDto>([]);
  displayedColumns: string[] = ['Test', 'Seccion', 'Total', 'Conversion', 'Acciones'];

  users: any;
  percentil: any;
  respuestas: any;
  test: TestDto[] = [];
  apartado: SeccionDto[] = [];
  pregunta: PreguntasaDto[] = [];
  opcion: OpcionsaDto[] = [];
  id_usuario: any;
  id_seccion: any;
  totalValue: number = 0;
  conversion: any;

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
    const fileName = `${this.users.first_name}_${this.users.last_name}_Informe`;
    this.exporter?.exportTable('xlsx', {fileName});
  }
  loadData(): void {
    this.usersService.getUserById(this.id_usuario).subscribe(data => {
      this.users = data;
      console.log(data);
    });
    this.loadRespuestas()
    this.loadTest();
    this.loadApartado();
    this.getConversion();
  }

  loadRespuestas(): void {
    this.usersService.getTotalRespuestaSA(this.id_usuario).subscribe(data => {
      this.respuestas = data;
      console.log(data)
      this.dataSource = new MatTableDataSource<TotalDto>(this.respuestas);
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
  getConversion(): void {
    this.usersService.getConversion(this.id_usuario).subscribe(data => {
      this.conversion = data;
      console.log(this.conversion)
    });
  }

  openChartDialog(): void {
    this.dialog.open(GraficaTestComponent,{
      width: '900px',
      height: '420px',
      data: {
        total: this.conversion,
        showNumbers: true
      }
    });
  }
  openChartDialogWithoutNumbers(): void {
    this.dialog.open(GraficaTestComponent,{
      width: '900px',
      height: '420px',
      data: {
        total: this.conversion,
        showNumbers: false
      }
    });
  }
  onPageChange(event: any): void {
    this.loadRespuestas();
  }
}
