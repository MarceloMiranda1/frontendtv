import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TutorDto} from "../../../dto/tutorDto";
import {EncuestaDto} from "../../../dto/encuestaDto";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  user: any
  data: any
  id: any;
  constructor(private userService: UsersService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    const url = this.router.url;
    const segments = url.split('/');
    this.id = segments[segments.length - 1];
    console.log(this.id);
  }
  ngOnInit(): void {
    console.log(this.id);
  }

  form = new FormGroup({
    pregunta1: new FormControl('', Validators.required),
    pregunta2: new FormControl(''),
    pregunta3: new FormControl('', Validators.required),
    pregunta4: new FormControl('', Validators.required),
    pregunta5: new FormControl('', Validators.required),
    pregunta6: new FormControl('', Validators.required),
    pregunta7: new FormControl('', Validators.required),
  });
  addEncuesta() {
    // Suponiendo que this.user.idUsuario es el ID del usuario
    const pregunta1control = this.form.get('pregunta1');
    const pregunta2control = this.form.get('pregunta2');
    const pregunta3control = this.form.get('pregunta3');
    const pregunta4control = this.form.get('pregunta4');
    const pregunta5control = this.form.get('pregunta5');
    const pregunta6control = this.form.get('pregunta6');
    const pregunta7control = this.form.get('pregunta7');

    if (pregunta1control && pregunta2control && pregunta3control && pregunta4control && pregunta5control && pregunta6control && pregunta7control) {
      const encuestaDto: EncuestaDto = {
        id: null,
        pregunta1: pregunta1control.value,
        pregunta2: pregunta2control.value,
        pregunta3: pregunta3control.value,
        pregunta4: pregunta4control.value,
        pregunta5: pregunta5control.value,
        pregunta6: pregunta6control.value,
        pregunta7: pregunta7control.value,
        usuario_id: this.id
      };
      this.userService.addEncuesta(this.id, encuestaDto).subscribe(data => {
        this.router.navigate(['/login_students']);
        Swal.fire({
          title: '¡Felicidades!',
          text: 'Te has registrado exitosamente en la plataforma del SOV. Estamos aquí para apoyarte en tu camino hacia el futuro profesional',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      });
    }
  }
}
