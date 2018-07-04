import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {PoneyRaceModule} from './modules/poney-race/poney-race.module';

@NgModule({
  declarations: [
    AppComponent,
    
    ],
  imports: [
    BrowserModule,
    PoneyRaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
