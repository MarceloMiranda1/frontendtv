import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TipoUsuarioDto} from "../../dto/tipoUsuarioDto";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TutorDto} from "../../dto/tutorDto";

@Component({
  selector: 'app-add-tutor',
  templateUrl: './add-tutor.component.html',
  styleUrls: ['./add-tutor.component.css']
})
export class AddTutorComponent implements OnInit {
  user: any
  data: any
  id: any
  constructor(private userService: UsersService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    const url = this.router.url;
    const segments = url.split('/');
    this.id = segments[segments.length - 1];
  }

  ngOnInit() {
    console.log(this.id);
  }

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    ci: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
  });
  addTutor() {
    // Suponiendo que this.user.idUsuario es el ID del usuario
    const nombreControl = this.form.get('nombre');
    const apellidoControl = this.form.get('apellido');
    const ciControl = this.form.get('ci');
    const correoControl = this.form.get('correo');

    if (nombreControl && apellidoControl && ciControl && correoControl) {
      const tutorDto: TutorDto = {
        id: null,
        nombre: nombreControl.value,
        apellido: apellidoControl.value,
        ci: ciControl.value,
        correo: correoControl.value,
        usuario_id: this.id, // Suponiendo que this.user.idUsuario es el ID del usuario
      };

      this.userService.addTutor(this.id, tutorDto).subscribe(data => {
        this.router.navigate(['/usuarios/estudiantes']);
      });
    }
  }


}
