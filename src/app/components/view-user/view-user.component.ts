import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from "../../users.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuariodto } from "../../dto/usuariodto";
import { TipoUsuarioDto } from "../../dto/tipoUsuarioDto";
import { MatSort } from "@angular/material/sort";
import {UsuarioGrupoDto} from "../../dto/usuarioGrupoDto";

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<Usuariodto> = new MatTableDataSource<Usuariodto>([]);
  displayedColumns: string[] = ['ID', 'nombre', 'apellido', 'ci', 'edad', 'sexo', 'correo', 'tipo', 'acciones'];

  users: any[] | undefined;
  tipoUsuario: TipoUsuarioDto[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
    this.loadTipoUsuarios();
  }

  loadUsers(): void {
    this.usersService.getUser().subscribe(data => {
      this.users = data;
      console.log(data)
      this.dataSource = new MatTableDataSource<Usuariodto>(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  loadTipoUsuarios(): void {
    this.usersService.getTipoUsuario().subscribe(data => {
      this.tipoUsuario = data;
    });
  }

  deleteUser(id: number): void {
    this.usersService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  getTipoUsuarioName(id: number): string {
    const tipoUsuario = this.tipoUsuario.find(tipo => tipo.id === id);
    return tipoUsuario ? tipoUsuario.name : '';
  }

  onPageChange(event: any): void {
       this.loadUsers();
  }
}
