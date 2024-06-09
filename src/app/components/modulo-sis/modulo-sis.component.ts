import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-sis',
  templateUrl: './modulo-sis.component.html',
  styleUrls: ['./modulo-sis.component.css']
})
export class ModuloSisComponent implements OnInit {

    constructor() {
    }

  ngOnInit(): void {
    // Establecer el valor inicial del textarea
    let htmlCodeElement = document.getElementById('html-code') as HTMLTextAreaElement;
    if (htmlCodeElement) {
      htmlCodeElement.value = `
            <table>
                <thead>
                    <tr>
                        <th>Encabezado 1</th>
                        <th>Encabezado 2</th>
                        <th>Encabezado 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dato 1</td>
                        <td>Dato 2</td>
                        <td>Dato 3</td>
                    </tr>
                </tbody>
            </table>`;
      this.run();
    }
  }

  run(): void {
    let htmlCode = (document.getElementById('html-code') as HTMLTextAreaElement).value;
    let cssCode = (document.getElementById('css-code') as HTMLTextAreaElement).value;
    let jsCode = (document.getElementById('js-code') as HTMLTextAreaElement).value;
    let output = document.getElementById('output') as HTMLIFrameElement;

    if (output && output.contentDocument) {
      // Agregar referencia a los estilos de Bootstrap
      let bootstrapLink = output.contentDocument.createElement('link');
      bootstrapLink.rel = 'stylesheet';
      bootstrapLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
      output.contentDocument.head.appendChild(bootstrapLink);

      output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode+"</style>";
      let scriptElement = output.contentDocument.createElement('script');
      scriptElement.textContent = jsCode;
      output.contentDocument.body.appendChild(scriptElement);
    } else {
      console.error('El elemento output o su contentDocument no existen');
    }
  }

}
