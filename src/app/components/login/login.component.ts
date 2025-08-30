import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {Router} from "@angular/router";
import {Usuariodto} from "../../dto/usuariodto";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../estilos/estilos1.css']
})
export class LoginComponent {
  usuarioDto : Usuariodto = {} as Usuariodto;
  loginForm: FormGroup;

  constructor(private userService: UsersService,private router: Router,private formBuilder: FormBuilder, private titleService: Title) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    this.titleService.setTitle('Login');
  }

  login(){
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.userService.loginUser(username,password).subscribe({
      next:(data:Usuariodto)=>{
        console.log(data);
        if (data){
          window.location.href ='/usuarios';
        }
      }, error: (error: any) => {
        console.log(error);
        alert("Usuario o contraseña incorrectos/empresa incorrecta");
        location.reload();

      }
    })
  }




}
