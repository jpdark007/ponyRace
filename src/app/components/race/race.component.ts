import { Component, OnInit } from '@angular/core';
import { IsRacingPipe } from '../../pipes/is-racing.pipe';
import { RaceService } from '../../services/race.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  winningPoneyId: number;
  intervalId: any;

  //poneyIds: number[] = [0,3];

  ponies: Poney[]

  handlewin(poney: Poney): void{
    //document.getElementById('poney'+ poney.id).classList.remove('poney'+poney.id);
    if (typeof this.winningPoneyId === "undefined"){
      this.winningPoneyId = poney.id;
    }
    console.log("handlewin")
  }

  handleclick(i){
    //document.getElementById('poney'+i).src = 
    //let img = (<HTMLImageElement>document.getElementById('poney'+i));
    //img.src = img.src.replace("running", "rainbow");
    console.log("handleclick")
  }

  constructor(
    private isRacingPipe: IsRacingPipe,
    private raceService: RaceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //Get id from route
    this.route.params.subscribe(params => this.startRace(params));
  }

    startRace(params){
      this.ponies = this.raceService.getPonies();

      //get race
      let race = this.raceService.getRaceById(params.id);

      this.ponies = this.isRacingPipe.transform(this.ponies, race.poneyIds);
  
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
