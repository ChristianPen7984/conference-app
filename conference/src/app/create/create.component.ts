import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as $ from 'jquery';
import { ModalServicesService } from '../services/modal-services.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  conference: {name: string, val: string}[];

  toggleFailure: boolean = false;

  constructor(private authService: AuthService, private modalService: ModalServicesService) { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  setConference(): void {
    this.conference = [
      { name: 'title', val: $('#title').val().toString() },
      { name: 'desc', val: $('#desc').val().toString() },
      { name: 'date', val: $('#date').val().toString() },
      { name: 'location', val: $('#location').val().toString() },
    ];

    let notEmpty: number = 0;
    this.conference.forEach(element => {
      if (element.val == '') notEmpty += 1
    });
    if (notEmpty < 1) {
      this.openCreateModal();
      this.clearForm();
    }
    else this.toggleFailure = true;
  }

  getConference(): {name: string, val: string}[]{
    return this.conference;
  }

  logout(): void {
    this.authService.logout();
  }

  openCalendarModal(): void {
    this.modalService.setCalendarDisplay(true);
  }

  openCreateModal(): void {
    this.modalService.setCreateDisplay(true);
  }

  clearForm(): void {
    $('#title').val('');
    $('#desc').val('');
    $('#date').val('');
    $('#location').val('');
  }

}