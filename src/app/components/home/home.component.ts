import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  races: Race[]
  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.races = this.raceService.getRaces();
  }

}
