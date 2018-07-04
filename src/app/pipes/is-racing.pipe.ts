import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isRacing'
})
export class IsRacingPipe implements PipeTransform {

  transform(ponies: Poney[], poneyIds: number[]): Poney[] {
    return ponies.filter(poney => poneyIds.includes(poney.id))
  }
}
