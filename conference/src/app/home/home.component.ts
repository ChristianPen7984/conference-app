import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Conferences } from 'src/app/conferences';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  conferences: Object[] = [];

  slide1: JQuery<HTMLElement>
  slide2: JQuery<HTMLElement>
  slide3: JQuery<HTMLElement>

  dot1: JQuery<HTMLElement>
  dot2: JQuery<HTMLElement>
  dot3: JQuery<HTMLElement>

  constructor() { }

  ngOnInit() {

    Conferences.forEach(index => {
      if (index.id < 4) {
        this.conferences.push(index);
      }
    });

  }

  slideIterator(index: number, direction: string): void {

    this.slide1 = $("#carousel-slide:nth-child(1)");
    this.slide2 = $("#carousel-slide:nth-child(2)");
    this.slide3 = $("#carousel-slide:nth-child(3)");

    if (direction == "next") {
      if (index == 1) { this.slide1.hide(); this.slide2.show() }
      else if (index == 2) { this.slide2.hide(); this.slide3.show() }
      else { this.slide3.hide(); this.slide1.show() }
    }
    else if (direction == "prev") {
      if (index == 1) { this.slide1.hide(); this.slide3.show(); }
      else if (index == 2) { this.slide2.hide(); this.slide1.show(); }
      else { this.slide3.hide(); this.slide2.show(); }
    }

  }

  openCalendarModal(): void {
    $('app-calendar-modal').css('visibility', 'visible');
  }

}