import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  winningPoneyId: number;
  intervalId: any;

  ponies: Poney[] =
  [
    {
      id: 0,
      "name": "Eric",
      "img" : "https://github.com/Aubret/poneymon/blob/master/src/assets/pony-blue-running.gif?raw=true",
      "distance": 0
    },
    {
      id: 1,
      "name": "Tom",
      "img": "https://github.com/Aubret/poneymon/blob/master/src/assets/pony-purple-running.gif?raw=true",
      "distance": 0
    },
    {
      id: 2,
      "name": "Steeve",
      "img": "https://github.com/Aubret/poneymon/blob/master/src/assets/pony-green-running.gif?raw=true",
      "distance": 0
    }
  ];

  handlewin(poney: Poney): void{
    //document.getElementById('poney'+ poney.id).classList.remove('poney'+poney.id);
    this.winningPoneyId = poney.id;
    console.log("handlewin")
  }

  handleclick(i){
    //document.getElementById('poney'+i).src = 
    let img = (<HTMLImageElement>document.getElementById('poney'+i));
    img.src = img.src.replace("running", "rainbow");
    console.log("handleclick")
  }

  constructor() { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      for(let i=0;i<this.ponies.length; i++){
        this.ponies[i].distance += Math.floor(Math.random() * 5) + 1
        if(this.ponies[i].distance >= 90){
          clearInterval(this.intervalId);
          break; 
        }
      }
    },400)
  }

}
