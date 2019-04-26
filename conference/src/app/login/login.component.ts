import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  return: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.sendTokens($('.username').val().toString(),$('.password').val().toString());
    this.router.navigateByUrl('/create')  
  }

}