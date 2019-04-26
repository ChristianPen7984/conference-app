import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  services: {title: string, desc: string}[];

  constructor() { }

  ngOnInit() {
    this.services = [
      {title: 'Worldwide Conference Data',desc:'We provide a mass conglomeration of popular conferences from around the world.  Feel free to visit the "CONFERENCES" page to find a desired conference.  From there, you can gather information regarding various conferences such as the date, location, description, and much more!'},
      {title: 'Conference Location Provider',desc:'Although these conferences may be located around the world, we provide lookups for each of our listed conferences down to the exact coordinates.  If you stuggle to understand the location of the conference via text, we have a fully integrated map to ease the process.'},
      {title: 'Calendar API',desc:'Similar to our embedded location finder, Conference.io provides a calendar where users can browse the dates of all the conference listed within our service.  From here, users can locate specific conferences and view their details and location for that date.'},
    ]
  }

}