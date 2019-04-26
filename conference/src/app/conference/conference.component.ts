import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conference } from '../conference';
import { Conferences } from '../conferences';
import { map } from '../map';
import { ModalServicesService } from '../services/modal-services.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {

  latitude: number;
  longitude: number;
  styles = map;

  conference: Conference;

  constructor(private route: ActivatedRoute, private modalService: ModalServicesService) {
    Conferences.forEach((conference: Conference) => {
      if (conference.title.includes(this.route.snapshot.paramMap.get('title'))) {
        this.latitude = conference.lat;
        this.longitude = conference.long;
        return this.conference = conference;
      }
    });
  }

  ngOnInit() {
    window.scroll(0, 0);
  }

  openCalendarModal(): void {
    this.modalService.setCalendarDisplay(true);
  }

}