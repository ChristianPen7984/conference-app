import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  routes: { link: string, title: string }[];
  activeRoute: string;

  constructor() { }

  ngOnInit() {
    this.routes = [
      {link:'/home',title:'HOME'},
      {link:'/conferences',title:'CONFERENCES'},
      {link:'/calendar',title:'CALENDAR'},
      {link:'/about',title:'ABOUT'}
    ];
    this.activeRoute = 'HOME'
  }

  toggleHamburger():void {
    let currentElement = $("#navbar")
    let currentClassname = $(".navbar-container").attr('class');
    currentClassname === "navbar-container" ?
    currentElement.removeClass('navbar-container').addClass('navbar-container responsive') :
    currentElement.removeClass('navbar-container responsive').addClass('navbar-container');
  }

  collapseMenu(): void {
    this.toggleHamburger();
  }
  
}