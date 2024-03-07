import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TipoUsuarioDto} from "../../dto/tipoUsuarioDto";
import {map, Observable, startWith} from "rxjs";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{

  constructor(private userService: UsersService, private router: Router) { }
  data: any
  tipoUsuario: TipoUsuarioDto[] = [];
  myControl = new FormControl('');
  options: String[] = [];
  filteredOptions: Observable<String[]> | undefined;

  ngOnInit(){
    this.userService.getTipoUsuario().subscribe({
      next:(data: TipoUsuarioDto[])=>{
      console.log(data);
      this.tipoUsuario = data;
      this.options =this.tipoUsuario.map(tipo=>tipo.nombre);
      this.filteredOptions =this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value||'')),
      );
      }
    })
  }
  private _filter(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
    Tipo_id: new FormControl(this.tipoUsuario.find((tipo:TipoUsuarioDto)=>tipo.nombre === this.myControl.value), Validators.required),
  })
  addUser(){
    this.data = this.form.value
    this.userService.addUser(this.data).subscribe(data=>{
      this.router.navigate(['/'])
    })
  }


}
