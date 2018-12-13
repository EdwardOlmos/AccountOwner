import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeText: string;

  constructor(private jwtHelper: JwtHelper, private router: Router) { }

  ngOnInit() {
    this.homeText = `WELCOME TO EDWARD'S APPLICATION`;
  }

  isUserAuthenticated() {
    // tslint:disable-next-line:prefer-const
    let token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem('jwt');
  }

}
