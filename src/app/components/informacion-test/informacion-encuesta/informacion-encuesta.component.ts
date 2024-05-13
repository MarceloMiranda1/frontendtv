import {Component, OnInit, ViewChild} from '@angular/core';
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
export class InformacionEncuestaComponent implements OnInit {

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
      this.dataSource = new MatTableDataSource<EncuestaDto>(this.encuesta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      // Aquí es donde llenamos DATA después de que encuesta esté definida
      this.DATA = this.encuesta.map((e: EncuestaDto) => {
        return {
          // Aquí debes reemplazar 'propiedad' con las propiedades reales de EncuestaDto
          pregunta1: e.pregunta1,
          pregunta2: e.pregunta2,
          pregunta3: e.pregunta3,
          pregunta4: e.pregunta4,
          pregunta5: e.pregunta5,
          pregunta6: e.pregunta6,
          pregunta7: e.pregunta7,
        }
      });
    });
  }
  DATA: EncuestaDto[] = [];
  onPageChange(event: any): void {
    this.loadEncuesta();
  }

}
