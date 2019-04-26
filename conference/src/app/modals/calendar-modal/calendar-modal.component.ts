import { Component, OnInit } from '@angular/core';
import { ModalServicesService } from 'src/app/services/modal-services.service';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.css']
})
export class CalendarModalComponent implements OnInit {

  constructor(private modalService: ModalServicesService) { }

  ngOnInit() {
  }

  close(): void {
    this.modalService.setCalendarDisplay(false);
  }

}