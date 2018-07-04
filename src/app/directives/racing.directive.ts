import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appRacing]'
})
export class RacingDirective {

  @Input() poney: Poney

  constructor(private element: ElementRef) { }

  @HostListener('dblclick') handleDblClick(){
    
    let runningImg = this.poney.img.replace('rainbow', 'running');
    let rainbowImg = this.poney.img.replace('running', 'rainbow');

    this.poney.img = rainbowImg;
    this.poney.distance += 15;

    setTimeout(() => {
      this.poney.img = runningImg;
    },800)
  }

  ngAfterViewChecked(){
    this.element.nativeElement.querySelector('.poney').style.left = `${this.poney.distance}%`
    console.log("add style directive")
  }
}
