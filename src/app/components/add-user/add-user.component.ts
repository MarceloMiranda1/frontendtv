import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../users.service";
import { Router } from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import { TipoUsuarioDto } from "../../dto/tipoUsuarioDto";
import { map, Observable, startWith } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

function passwordSpecialCharValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const value = control.value;
  if (!/[!@#$%^&*(),.?":{}|<>]/g.test(value)) {
    return { 'noSpecialChar': true };
  }
  return null;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router, private http: HttpClient,private snackBar: MatSnackBar) { }

  data: any;
  Tipo_id: TipoUsuarioDto[] = [];
  options: string[] = [];

  ngOnInit() {

  }


  form = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(10), passwordSpecialCharValidator]),
  });


  addUser() {
    this.data = this.form.value;
    this.userService.addAdmin(this.data).subscribe(data => {
      this.snackBar.open('Usuario agregado', 'Cerrar', {
        duration: 2000,
        panelClass: ['custom-snackbar'],
        verticalPosition: 'top'
      })
      this.router.navigate(['/usuarios']);
    });

  }
}
