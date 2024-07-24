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
      htmlCodeElement.value = `<table class="table table-striped">
  <thead id="tableHead">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Button</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
<button id="changeColorButton">Cambiar Color</button>

`;

    }
    let cssCodeElement = document.getElementById('css-code') as HTMLTextAreaElement;
    if (cssCodeElement) {
      cssCodeElement.value = `thead{
    background-color: red;
    color: white;
    }
    button{
    display: flex;
  justify-content: center;
  margin: auto; /* Centra el contenedor en su contenedor padre */
  color: white;
  background-color: #002244;
  width: 20%;
  height: 50px;
    }
    `;
    }
    let jsCodeElement = document.getElementById('js-code') as HTMLTextAreaElement;
    if (jsCodeElement) {
      jsCodeElement.value = `document.getElementById('changeColorButton').addEventListener('click', function() {
  document.getElementById('tableHead').style.backgroundColor = 'blue';
});
    `;
    }
    this.run();
  }

  run(): void {
    let htmlCode = (document.getElementById('html-code') as HTMLTextAreaElement).value;
    let cssCode = (document.getElementById('css-code') as HTMLTextAreaElement).value;
    let jsCode = (document.getElementById('js-code') as HTMLTextAreaElement).value;
    let output = document.getElementById('output') as HTMLIFrameElement;

    if (output && output.contentDocument) {
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
