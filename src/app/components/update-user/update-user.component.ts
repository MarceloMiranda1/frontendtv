import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../users.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: any;
  form!: FormGroup;

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let idUsuario = this.route.snapshot.params['idUsuario']
    this.userService.getUserById(idUsuario).subscribe(data => {
      this.user = data;
      console.log(data);

      // Asigna los datos del usuario al formulario
      this.form?.patchValue({
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        username: this.user.username,
        edad: this.user.edad,
        sexo: this.user.sexo,
        email: this.user.email,
        password: this.user.password,
        Tipo_id: this.user.Tipo_id
      });
    });

    // Define el formulario con las validaciones necesarias
    this.form = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      Tipo_id: new FormControl('', Validators.required)
    });
  }

  submit() {
    if (this.form?.valid) {
      // Obtén los valores del formulario
      const formData = this.form.value;

      // Combina los valores del formulario con los datos del usuario
      const updatedUser = {
        ...this.user,
        ...formData
      };

      // Actualiza el usuario utilizando el servicio
      this.userService.updateUser(updatedUser.idUsuario, updatedUser).subscribe(data => {
        console.log(data);
        this.router.navigate(['/usuarios']);
      });
    }
  }
}
