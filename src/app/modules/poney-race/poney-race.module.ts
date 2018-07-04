import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoneyComponent } from '../../components/poney/poney.component';
import { RacingDirective } from '../../directives/racing.directive';
import { RaceComponent } from '../../components/race/race.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CapitalizePipe } from '../../pipes/capitalize.pipe'
import { IsRacingPipe } from '../../pipes/is-racing.pipe';

import { HomeComponent } from '../../components/home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule
  ],
  exports: [
    PoneyComponent,
    RacingDirective,
    RaceComponent
  ],
  declarations: [
    PoneyComponent,
    RacingDirective,
    RaceComponent,
    CapitalizePipe,
    IsRacingPipe,
    HomeComponent
  ],
  providers:[
    IsRacingPipe
  ]
})
export class PoneyRaceModule { }
