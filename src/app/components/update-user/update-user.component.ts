import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent{
  user: any
  data: any
  constructor(private userService: UsersService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let idUsuario = this.route.snapshot.params['idUsuario']
    this.userService.getUserById(idUsuario).subscribe(data=>{
      this.user = data
      console.log(data)
    })
  }
  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    ci: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    Tipo_id: new FormControl('', Validators.required)
  })
  submit(){
    this.data = this.form.value
    this.user.nombre = this.data.nombre
    this.user.apellido = this.data.apellido
    this.user.ci = this.data.ci
    this.user.edad = this.data.edad
    this.user.sexo = this.data.sexo
    this.user.correo = this.data.correo
    this.user.password = this.data.password
    this.user.status = this.data.status
    this.user.Tipo_id = this.data.Tipo_id
    console.log(this.data)
    this.userService.updateUser(this.user?.idUsuario, this.user).subscribe(data=>
    {
      console.log(data)
    })
    this.router.navigate(['/'])
  }

}
