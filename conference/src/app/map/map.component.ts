import { Component, OnInit } from '@angular/core';
import { map } from '../map';
import { Conference } from '../conference';
import { ActivatedRoute } from '@angular/router';
import { Conferences } from '../conferences';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  latitude: number;
  longitude: number;
  styles = map;

  conference: Conference;

  constructor(private route: ActivatedRoute) { 
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

}