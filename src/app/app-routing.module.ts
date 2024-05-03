import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewUserComponent} from "./components/view-user/view-user.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {UpdateUserComponent} from "./components/update-user/update-user.component";
import {LoginComponent} from "./components/login/login.component";
import {ViewStudentComponent} from "./components/view-student/view-student.component";
import {AddTutorComponent} from "./components/add-tutor/add-tutor.component";
import {InstruccionComponent} from "./components/instruccion/instruccion.component";
import {Test1Component} from "./components/test1/test1.component";
import {FormStudentComponent} from "./components/form-student/form-student.component";
import {EncuestaComponent} from "./components/form-student/encuesta/encuesta.component";

const routes: Routes = [
  {path: 'usuarios', component:ViewUserComponent},
  {path: 'add', component:AddUserComponent},
  {path: 'update/:idUsuario', component:UpdateUserComponent},
  {path: 'usuarios/estudiantes', component:ViewStudentComponent},
  {path: 'usuario/:idUsuario', component:AddTutorComponent},
  {path: 'instrucciones', component: InstruccionComponent},
  {path: 'pregunta', component: Test1Component},
  {path: 'form_student', component: FormStudentComponent},
  {path: 'encuesta/:usuario_id', component:EncuestaComponent},
  {path: '', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
