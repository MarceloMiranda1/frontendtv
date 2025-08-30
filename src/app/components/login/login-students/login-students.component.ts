import { Component, OnInit } from '@angular/core';
import {Usuariodto} from "../../../dto/usuariodto";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-students',
  templateUrl: './login-students.component.html',
  styleUrls: ['./login-students.component.css', './../../../estilos/estilos1.css']
})
export class LoginStudentsComponent {
  usuarioDto : Usuariodto = {} as Usuariodto;
  loginForm: FormGroup;

  constructor(private userService: UsersService,private router: Router,private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login(){
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    console.log(username);
    this.userService.loginUser(username,password).subscribe({
      next:(data:Usuariodto)=>{
        console.log(data);
        this.usuarioDto = data;
        console.log(this.usuarioDto);
        if (data){
          this.router.navigate([`/menu-student`]);
        }
      }, error: (error: any) => {
        console.log(error);
        alert("Usuario o contraseña incorrectos/empresa incorrecta");
        location.reload();

      }
    })
  }

}
