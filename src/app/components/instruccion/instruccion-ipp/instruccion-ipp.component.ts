import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-instruccion-ipp',
  templateUrl: './instruccion-ipp.component.html',
  styleUrls: ['./instruccion-ipp.component.css']
})
export class InstruccionIppComponent implements OnInit {
  session: any;
  test: any;
  seccion: any;
  pregunta: any;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
      this.getTest();
  }
  getSession(): void {
    this.usersService.getSession().subscribe(
      data => {
        this.session = data;
        console.log(this.session);
      },
      error => {
        console.error('Error al obtener la session:', error);
      }
    );
  }
  getTest(): void {
    this.usersService.test(2).subscribe((data) => {
        this.test = data;
        console.log(this.test);
      },
      (error) => {
        console.error('Error al obtener el test:', error);
      }
    );
  }
  startTest(){
    this.router.navigate(['/preguntaIpp']);
  }

}
