import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conferenceSearch'
})
export class ConferenceSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
