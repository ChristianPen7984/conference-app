import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  logout() {
    this.authService.logout();
  }

  openCalendarModal(): void {
    $('app-calendar-modal').css('visibility', 'visible');
  }

}
