import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../users.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TipoUsuarioDto } from "../../dto/tipoUsuarioDto";
import { map, Observable, startWith } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router, private http: HttpClient) { }

  data: any;
  Tipo_id: TipoUsuarioDto[] = [];
  options: string[] = [];
  myControl = new FormControl('');
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.userService.getTipoUsuario().subscribe((data: TipoUsuarioDto[]) => {
      console.log(data);
      this.Tipo_id = data;
      this.options = this.Tipo_id.map(tipo => tipo.name);
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  form = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onChangeTipoUsuario(event: any) {
    const tipoSeleccionado = event.target.value;
    const tipo = this.Tipo_id.find(tipo => tipo.name === tipoSeleccionado);
    if (tipo) {
      this.form.controls['Tipo_id'].setValue(tipo.id);
    }
  }

  addUser() {
    this.data = this.form.value;
    this.userService.addAdmin(this.data).subscribe(data => {
      this.router.navigate(['/usuarios']);
    });
  }
}
