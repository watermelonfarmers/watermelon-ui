import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    console.log(value);
    const date = new Date(value);
    const readableDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    return readableDate;
  }

}
