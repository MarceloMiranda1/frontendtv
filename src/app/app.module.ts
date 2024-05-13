import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import { LoginComponent } from './components/login/login.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { AddTutorComponent } from './components/add-tutor/add-tutor.component';
import { ViewTutorComponent } from './components/view-tutor/view-tutor.component';
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { InstruccionComponent } from './components/instruccion/instruccion.component';
import {MatTableModule} from "@angular/material/table";
import { Test1Component } from './components/test1/test1.component';
import { FormStudentComponent } from './components/form-student/form-student.component';
import { EncuestaComponent } from './components/form-student/encuesta/encuesta.component';
import { LoginStudentsComponent } from './components/login/login-students/login-students.component';
import { InformacionTestComponent } from './components/informacion-test/informacion-test.component';
import {MatTableExporterModule} from "mat-table-exporter";
import { InformacionEncuestaComponent } from './components/informacion-test/informacion-encuesta/informacion-encuesta.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { MensajeTestComponent } from './components/mensaje-test/mensaje-test.component';
import { MenuStudentComponent } from './components/menu-student/menu-student.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UpdateUserComponent,
    ViewUserComponent,
    LoginComponent,
    ViewStudentComponent,
    AddTutorComponent,
    ViewTutorComponent,
    InstruccionComponent,
    Test1Component,
    FormStudentComponent,
    EncuestaComponent,
    LoginStudentsComponent,
    InformacionTestComponent,
    InformacionEncuestaComponent,
    MensajeTestComponent,
    MenuStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatTableExporterModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
