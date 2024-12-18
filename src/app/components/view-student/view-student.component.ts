import {Component, OnInit, ViewChild} from '@angular/core';
import {Usuariodto} from "../../dto/usuariodto";
import {TipoUsuarioDto} from "../../dto/tipoUsuarioDto";
import {UsersService} from "../../users.service";
import {MatDialog} from "@angular/material/dialog";
import {ViewTutorComponent} from "../view-tutor/view-tutor.component";
import {ActivatedRoute, Route} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<Usuariodto> = new MatTableDataSource<Usuariodto>([]);
  displayedColumns: string[] = ['ID', 'nombre', 'apellido', 'ci', 'edad', 'sexo', 'correo', 'celular', 'acciones'];

  users: any|undefined
  tutor: any|undefined
  usuarioDto: Usuariodto[]=[];
  tipoUsuario: TipoUsuarioDto[]=[];
  constructor(private usersService: UsersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTipoUsuarios();
    this.loadUsers();

  }
  loadUsers(): void {
    this.usersService.getUser().subscribe(data => {
      this.users = data;
      const filteredUsers = this.users.filter((user: Usuariodto) => user.groups.includes(2));
      this.dataSource = new MatTableDataSource<Usuariodto>(filteredUsers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  loadTipoUsuarios(): void {
    this.usersService.getTipoUsuario().subscribe(data => {
      this.tipoUsuario = data;
    });
  }
  getTipoUsuarioName(id: number): string {
    const tipoUsuario = this.tipoUsuario.find(tipo => tipo.id === id);
    return tipoUsuario ? tipoUsuario.name : '';
  }
  openDialog(idUsuario: number): void {
    this.usersService.getTutorById(idUsuario).subscribe(data => {
      this.tutor = data;
      console.log(data);

      // Abre el diálogo dentro del subscribe para asegurarte de tener los datos antes de mostrar el diálogo
      const dialogRef = this.dialog.open(ViewTutorComponent, {
        data: {
          nombre: this.tutor[0].nombre,
          apellido: this.tutor[0].apellido,
          ci: this.tutor[0].ci,
          correo: this.tutor[0].correo
        }
      });
    });
  }
  onPageChange(event: any): void {
    this.loadUsers();
  }


}
