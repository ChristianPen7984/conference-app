import { Pipe, PipeTransform } from '@angular/core';
import { Conference } from '../conference';

@Pipe({
  name: 'conferenceSearch'
})
export class ConferencesPipe implements PipeTransform {

  transform(conferences: Conference[], searchData: string): Conference[] {
    if(!searchData) { return conferences; }
    return conferences.filter(item => item.title.toLowerCase().trim().indexOf(searchData.toLowerCase().trim()) > -1);
  }

}