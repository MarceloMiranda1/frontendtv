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
import {LoginStudentsComponent} from "./components/login/login-students/login-students.component";
import {InformacionTestComponent} from "./components/informacion-test/informacion-test.component";
import {InformacionEncuestaComponent} from "./components/informacion-test/informacion-encuesta/informacion-encuesta.component";
import {MenuStudentComponent} from "./components/menu-student/menu-student.component";
import {MensajeTestComponent} from "./components/mensaje-test/mensaje-test.component";
import {InstruccionIppComponent} from "./components/instruccion/instruccion-ipp/instruccion-ipp.component";
import {Test2Component} from "./components/test2/test2.component";
import {InformacionIppComponent} from "./components/informacion-test/informacion-ipp/informacion-ipp.component";
import {InstruccionHspqComponent} from "./components/instruccion/instruccion-hspq/instruccion-hspq.component";
import {Test3Component} from "./components/test3/test3.component";
import {InformacionHspqComponent} from "./components/informacion-test/informacion-hspq/informacion-hspq.component";
import {InstruccionGraficoComponent} from "./components/instruccion/instruccion-grafico/instruccion-grafico.component";
import {TestGraficosComponent} from "./components/test1/test-graficos/test-graficos.component";
import {ModuloSisComponent} from "./components/modulo-sis/modulo-sis.component";

const routes: Routes = [
  {path: 'usuarios', component:ViewUserComponent},
  {path: 'add', component:AddUserComponent},
  {path: 'update/:idUsuario', component:UpdateUserComponent},
  {path: 'usuarios/estudiantes', component:ViewStudentComponent},
  {path: 'usuario/:idUsuario', component:AddTutorComponent},
  {path: 'instrucciones', component: InstruccionComponent},
  {path: 'instrucciones_ipp', component: InstruccionIppComponent},
  {path: 'instrucciones_hspq', component: InstruccionHspqComponent},
  {path: 'instruccion_grafico', component: InstruccionGraficoComponent},
  {path: 'ingenieria-sis' , component: ModuloSisComponent},
  {path: 'pregunta', component: Test1Component},
  {path: 'pregunta_grafico', component: TestGraficosComponent},
  {path: 'preguntaIpp', component: Test2Component},
  {path: 'preguntaHspq', component: Test3Component},
  {path: 'form_student', component: FormStudentComponent},
  {path: 'encuesta/:usuario_id', component:EncuestaComponent},
  {path: 'login_students', component:LoginStudentsComponent},
  {path: 'menu-student', component:MenuStudentComponent},
  {path: 'mensaje', component:MensajeTestComponent},
  {path: 'informacionTest/:usuario_id/:seccion_id', component:InformacionTestComponent},
  {path: 'informacionEncuesta/:usuario_id', component:InformacionEncuestaComponent},
  {path: 'informacionIpp/:usuario_id', component:InformacionIppComponent},
  {path: 'informacionHspq/:usuario_id', component:InformacionHspqComponent},
  {path: '', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
