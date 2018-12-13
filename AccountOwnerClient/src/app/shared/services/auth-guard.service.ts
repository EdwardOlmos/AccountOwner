import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private jwtHelper: JwtHelper, private router: Router) { }

  canActivate() {
    // tslint:disable-next-line:prefer-const
    let token = localStorage.getItem('jwt');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
