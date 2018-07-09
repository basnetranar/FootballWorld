import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremierLeagueComponent } from './premier-league/premier-league.component';
import { LaLigaComponent } from './la-liga/la-liga.component';
import { BundesligaComponent } from './bundesliga/bundesliga.component';
import { ItalianSeriaComponent } from './italian-seria/italian-seria.component';
import { FrenchLeagueComponent } from './french-league/french-league.component';
import { EnglishTableComponent } from './english-table/english-table.component';
import { EnglishStatsComponent } from './english-stats/english-stats.component';

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
		{path: ("stats"), component: EnglishStatsComponent}
		]
	},
	{
		path:("laLiga"),
		component: LaLigaComponent
	},
	{
		path:("bundesliga"),
		component: BundesligaComponent
	},
	{
		path:("italianSeria"),
		component: ItalianSeriaComponent
	},
	{
		path:("frenchLigue"),
		component: FrenchLeagueComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
