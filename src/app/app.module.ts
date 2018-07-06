import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierLeagueComponent } from './premier-league/premier-league.component';
import { LaLigaComponent } from './la-liga/la-liga.component';
import { BundesligaComponent } from './bundesliga/bundesliga.component';
import { ItalianSeriaComponent } from './italian-seria/italian-seria.component';
import { FrenchLeagueComponent } from './french-league/french-league.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierLeagueComponent,
    LaLigaComponent,
    BundesligaComponent,
    ItalianSeriaComponent,
    FrenchLeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
