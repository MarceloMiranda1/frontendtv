import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router, private http: HttpClient) { }

  data: any;
  id: any;

  ngOnInit(): void {
  }
  form = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    colegio: new FormControl('', Validators.required),
    celular: new FormControl('', Validators.required),
    password: new FormControl('prueba', Validators.required),
    grado_escolar: new FormControl('', Validators.required),
  });

  addStudent() {
    this.data = this.form.value;
    this.userService.addStudent(this.data).subscribe(data => {
      this.id = data.id
      console.log(this.id);
      this.router.navigate([`/encuesta/${this.id}`]);
    });
  }

}
