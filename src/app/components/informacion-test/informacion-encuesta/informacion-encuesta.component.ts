import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableExporterDirective} from "mat-table-exporter";
import {MatTableDataSource} from "@angular/material/table";
import {RespuestaSADto} from "../../../dto/respuestaSADto";
import {TestDto} from "../../../dto/testDto";
import {SeccionDto} from "../../../dto/seccionDto";
import {PreguntasaDto} from "../../../dto/preguntasaDto";
import {OpcionsaDto} from "../../../dto/opcionsaDto";
import {UsersService} from "../../../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EncuestaDto} from "../../../dto/encuestaDto";
import {EncuestaComponent} from "../../form-student/encuesta/encuesta.component";

@Component({
  selector: 'app-informacion-encuesta',
  templateUrl: './informacion-encuesta.component.html',
  styleUrls: ['./informacion-encuesta.component.css']
})
export class InformacionEncuestaComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTableExporterDirective) exporter: MatTableExporterDirective | undefined;


  dataSource: MatTableDataSource<EncuestaDto> = new MatTableDataSource<EncuestaDto>([]);
  displayedColumns: string[] = ['Pregunta', 'Respuesta'];

  users: any;
  id_usuario: any;
  encuesta: any;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.id_usuario = this.route.snapshot.params['usuario_id']
    this.usersService.getUserById(this.id_usuario).subscribe(data => {
      this.users = data;
      console.log(data);
    });
    this.loadEncuesta()
    const fileName = `${this.users.first_name}_${this.users.last_name}_Encuesta`;
    this.exporter?.exportTable('xlsx', {fileName});
  }
  loadEncuesta(): void {
    this.usersService.getEncuesta(this.id_usuario).subscribe(data => {
      this.encuesta = data;
      console.log(data)

      //const preguntas = ['¿Qué profesión quisieras estudiar y por qué?', '¿Si no tienes decidida tu elección explica por qué?', '¿Qué tipo de tareas te gustaría realizar en el campo laboral?', '¿Por qué?', '¿Tus papás están de acuerdo con tu elección?', '¿Qué piensan tus papás en relación a tu elección?', '¿Buscaste información acerca de la o las carreras de tu interés?'];
      const preguntas = ['pregunta1', 'pregunta2', 'pregunta3', 'pregunta4', 'pregunta5', 'pregunta6', 'pregunta7'];

      const encuestasMapeadas = this.encuesta.map((e: EncuestaDto) => {
        return preguntas.map(pregunta => ({
          pregunta: pregunta,
          respuesta: e[pregunta]
        }));
      });

      this.DATA = [].concat(...encuestasMapeadas);

      this.dataSource = new MatTableDataSource<EncuestaDto>(this.DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  DATA: EncuestaDto[] = [];
  onPageChange(event: any): void {
    this.loadEncuesta();
  }

}
