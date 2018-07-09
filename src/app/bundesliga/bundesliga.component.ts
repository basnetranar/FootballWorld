import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {table} from "../table";

@Component({
  selector: 'app-bundesliga',
  templateUrl: './bundesliga.component.html',
  styleUrls: ['./bundesliga.component.css']
})
export class BundesligaComponent implements OnInit {
 
 baseUrl:string = 'http://api.football-data.org/v2/competitions/2002/standings';
 auth:string = "X-Auth-Token";
 key:string = 'b12b9f38b6364eef9bf114fa054a82a1';

  constructor(private http:HttpClient) { }
  tableFinal = [];
  tempTable:table;

  ngOnInit() {
  	
  	this.http.get(this.baseUrl,{headers: new HttpHeaders().set(this.auth,this.key)})
  		.subscribe(res => {
  			
  			//check if the standing table has any data
  			if(res['standings'].length != 0){

	  			for (let teams in res['standings'][0].table ){
	  				this.tempTable = {
		  				team: res['standings'][0].table[teams].team.name,
		  				matchesPlayed: res['standings'][0].table[teams].playedGames,
						won: res['standings'][0].table[teams].won,
						lost: res['standings'][0].table[teams].lost,
						drawn: res['standings'][0].table[teams].draw,
						goalScored: res['standings'][0].table[teams].goalsFor,
						goalAgainst: res['standings'][0].table[teams].goalsAgainst,
						position: res['standings'][0].table[teams].position,
						points: res['standings'][0].table[teams].points,
						goalDifference: res['standings'][0].table[teams].goalDifference
					};
					this.tableFinal.push(this.tempTable);
				};

  			}
  		

  		});
  }
}
