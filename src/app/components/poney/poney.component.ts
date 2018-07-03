import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent{

  @Input() poney: Poney;
  @Output() win: EventEmitter<Poney> = new EventEmitter()

  constructor() { }

  ngAfterContentChecked() {
    if(this.poney.distance >= 90){
      this.win.emit(this.poney);
    }
  }
}
