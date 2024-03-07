import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Usuariodto} from "../../dto/usuariodto";
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']

})
export class ViewUserComponent implements OnInit {
  users: any|undefined
  usuarioDto: Usuariodto[]=[];


  ngAfterViewInit() {

  }
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe(data=>{
      this.users = data
      console.log(data)
    })
  }
  deleteUser(idUsuario: number){
    this.usersService.deleteUser(idUsuario).subscribe(data=>{
      console.log(data)
      this.ngOnInit()
    })
  }

}
