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

import { HttpClientModule } from '@angular/common/http';

import { CreateRaceComponent } from '../../components/create-race/create-race.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
    HomeComponent,
    CreateRaceComponent
  ],
  providers:[
    IsRacingPipe
  ]
})
export class PoneyRaceModule { }
