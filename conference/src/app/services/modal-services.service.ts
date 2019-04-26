import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServicesService {

  createDisplay: boolean;
  calendarDisplay: boolean;

  constructor() { }

  setCreateDisplay(isDisplayed: boolean):void {
    this.createDisplay = isDisplayed;
  }

  getCreateDisplay(): boolean {
    return this.createDisplay;
  }

  setCalendarDisplay(isDisplayed: boolean):void {
    this.calendarDisplay = isDisplayed;
  }

  getCalendarDisplay(): boolean {
    return this.calendarDisplay;
  }

}
