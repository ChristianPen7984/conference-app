import { Component, OnInit} from '@angular/core';
import { Conferences } from '../conferences';
import * as $ from 'jquery';
import { ModalServicesService } from '../services/modal-services.service';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent implements OnInit {

  conferences: Object[] = [];
  searchData: string;

  constructor(private modalService: ModalServicesService) { 
  }

  ngOnInit() {
    Conferences.forEach(conference => { this.conferences.push(conference); });
    window.scroll(0, 0);
  }

  openCalendarModal(): void {
    this.modalService.setCalendarDisplay(true);
  }

  setFilter(filterInput: string) {
    this.searchData = filterInput;
  }

}