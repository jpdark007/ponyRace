import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  races$: Observable<Race[]>
  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.races$ = this.raceService.getRaces();
  }

}
