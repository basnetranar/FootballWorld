import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
	{
		path:(""), redirectTo: "premierLeague", pathMatch: 'full'
	},
	{
		path:("premierLeague"),
		component: PremierLeagueComponent,

		children: [
		{path: (""), redirectTo: "table", pathMatch: 'full'},
		{path: ("table"), component: EnglishTableComponent},
		{path: ("stats"), component: EnglishStatsComponent},
		{path: ("matches"), component: EnglishMatchesComponent}
		]
	},
	{
		path:("laLiga"),
		component: LaLigaComponent,

		children: [
		{path: (""), redirectTo: "table", pathMatch: 'full'},
		{path: ("table"), component: LaLigaTableComponent},
		{path: ("teams"), component: LaLigaTeamsComponent},
		{path: ("matches"), component: LaLigaMatchesComponent}
		]
	},
	{
		path:("bundesliga"),
		component: BundesligaComponent,

		children: [
		{path: (""), redirectTo: "table", pathMatch: 'full'},
		{path: ("table"), component: BundesligaTableComponent},
		{path: ("teams"), component: BundesligaTeamsComponent},
		{path: ("matches"), component: BundesligaMatchesComponent}
		]
	},
	{
		path:("italianSeria"),
		component: ItalianSeriaComponent,

		children: [
		{path: (""), redirectTo: "table", pathMatch: 'full'},
		{path: ("table"), component: ItalianSeriaTableComponent},
		{path: ("teams"), component: ItalianSeriaTeamsComponent},
		{path: ("matches"), component: ItalianSeriaMatchesComponent}
		]
	},
	{
		path:("frenchLigue"),
		component: FrenchLeagueComponent,

		children: [
		{path: (""), redirectTo: "table", pathMatch: 'full'},
		{path: ("table"), component: FrenchLeagueTableComponent},
		{path: ("teams"), component: FrenchLeagueTeamsComponent},
		{path: ("matches"), component: FrenchLeagueMatchesComponent}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
