import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  sendTokens(token1: string, token2: string) {
    sessionStorage.setItem('email', token1);
    sessionStorage.setItem('password', token2);
  }

  getTokens() {
    if (sessionStorage.getItem('email') == 'admin' && 
    sessionStorage.getItem('password') == 'password') {
      return true;
    }
    else return false;
  }

  isLoggedIn() {
    return this.getTokens() != false;
  }

  logout() {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    this.router.navigateByUrl('/login')
  }

}