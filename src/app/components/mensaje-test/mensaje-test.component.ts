import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-test',
  templateUrl: './mensaje-test.component.html',
  styleUrls: ['./mensaje-test.component.css']
})
export class MensajeTestComponent implements OnInit {

  mensaje: string = "El test a finalizado, aprete el siguiente boton para volver al menu principal.";

  constructor() { }

  ngOnInit(): void {
  }

}
