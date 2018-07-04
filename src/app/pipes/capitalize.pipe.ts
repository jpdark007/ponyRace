import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: String): String {
    let capitalizeValue = `${value.charAt(0).toUpperCase()}${value.substr(1).toLowerCase()}`;

    return capitalizeValue;
  }

}
