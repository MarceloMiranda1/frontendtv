import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.usersService.logOut();
    this.router.navigate(['/']);
  }

}
