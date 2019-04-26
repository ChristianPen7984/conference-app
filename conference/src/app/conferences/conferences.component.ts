import { Component, OnInit} from '@angular/core';
import { Conferences } from '../conferences';
import * as $ from 'jquery';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent implements OnInit {

  conferences: Object[] = [];
  searchData: string;

  constructor() { 
  }

  ngOnInit() {
    Conferences.forEach(conference => { this.conferences.push(conference); });
    window.scroll(0, 0);
  }

  openCalendarModal(): void {
    $('app-calendar-modal').css('visibility', 'visible');
  }

  setFilter(filterInput: string) {
    this.searchData = filterInput;
  }

}