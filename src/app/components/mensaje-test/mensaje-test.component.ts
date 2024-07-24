import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-test',
  templateUrl: './mensaje-test.component.html',
  styleUrls: ['./mensaje-test.component.css']
})
export class MensajeTestComponent implements OnInit {

  mensaje: string = "¡Vamos a hacer una pausa aquí! El tiempo para completar esta sección ha terminado. No te preocupes si no has terminado todo el cuestionario, solo se evaluará lo que hayas llenado. \n" +
    "Por favor, prepárate para comenzar el siguiente subtest. Tómate un momento para respirar, concéntrate y ¡pon tu mejor actitud! Mantente atento a las instrucciones que te dará la persona a cargo.\n" +
    "Recuerda que cualquier duda o pregunta que tengas, puedes hacerla levantando la mano en cualquier momento. \n" +
    "¡Suerte, tú puedes! \n";

  constructor() { }

  ngOnInit(): void {
  }

}
