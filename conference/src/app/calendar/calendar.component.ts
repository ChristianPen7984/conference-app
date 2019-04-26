import { Component, OnInit } from '@angular/core';
import { Conferences } from '../conferences';
import * as $ from 'jquery';
import { ModalServicesService } from '../services/modal-services.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date: string;
  monthNames: string[];
  conferences: Object[] = [];

  constructor(private modalService: ModalServicesService) {

    this.monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

    this.date = `${this.monthNames[new Date().getMonth()]} of ${new Date().getFullYear()}`

  }

  ngOnInit() {
    
    Conferences.forEach(conference => {
      if (this.monthNames[new Date(conference.date).getMonth()] == this.monthNames[new Date().getMonth()]) {
        this.conferences.push(conference);
      }
    });
    
  }

  openCalendarModal(): void {
    this.modalService.setCalendarDisplay(true);
  }

}
