import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {PoneyRaceModule} from './modules/poney-race/poney-race.module';
import {RouterModule} from '@angular/router'

import rootRouterConfig from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    PoneyRaceModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
