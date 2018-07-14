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
import { EnglishTableComponent } from './english-table/english-table.component';
import { EnglishStatsComponent } from './english-stats/english-stats.component';
import { EnglishMatchesComponent } from './english-matches/english-matches.component';
import { LaLigaTableComponent } from './la-liga-table/la-liga-table.component';
import { LaLigaTeamsComponent } from './la-liga-teams/la-liga-teams.component';
import { LaLigaMatchesComponent } from './la-liga-matches/la-liga-matches.component';
import { ItalianSeriaMatchesComponent } from './italian-seria-matches/italian-seria-matches.component';
import { ItalianSeriaTeamsComponent } from './italian-seria-teams/italian-seria-teams.component';
import { ItalianSeriaTableComponent } from './italian-seria-table/italian-seria-table.component';
import { FrenchLeagueTableComponent } from './french-league-table/french-league-table.component';
import { FrenchLeagueTeamsComponent } from './french-league-teams/french-league-teams.component';
import { FrenchLeagueMatchesComponent } from './french-league-matches/french-league-matches.component';
import { BundesligaMatchesComponent } from './bundesliga-matches/bundesliga-matches.component';
import { BundesligaTeamsComponent } from './bundesliga-teams/bundesliga-teams.component';
import { BundesligaTableComponent } from './bundesliga-table/bundesliga-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierLeagueComponent,
    LaLigaComponent,
    BundesligaComponent,
    ItalianSeriaComponent,
    FrenchLeagueComponent,
    EnglishTableComponent,
    EnglishStatsComponent,
    EnglishMatchesComponent,
    LaLigaTableComponent,
    LaLigaTeamsComponent,
    LaLigaMatchesComponent,
    ItalianSeriaMatchesComponent,
    ItalianSeriaTeamsComponent,
    ItalianSeriaTableComponent,
    FrenchLeagueTableComponent,
    FrenchLeagueTeamsComponent,
    FrenchLeagueMatchesComponent,
    BundesligaMatchesComponent,
    BundesligaTeamsComponent,
    BundesligaTableComponent
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
