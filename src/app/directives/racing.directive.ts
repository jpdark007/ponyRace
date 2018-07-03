import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRacing]'
})
export class RacingDirective {

  @Input() poney: Poney

  constructor(private element: ElementRef) { }

  ngAfterViewChecked(){
    this.element.nativeElement.querySelector('.poney').style.left = `${this.poney.distance}%`
    console.log("add style directive")
  }
}
