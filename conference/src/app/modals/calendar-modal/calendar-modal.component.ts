import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.css']
})
export class CalendarModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  close(): void {
    $('#modal').css('visibility','hidden');
    $('#page-mask').css('visibility','hidden');
    window.location.reload();
  }

}