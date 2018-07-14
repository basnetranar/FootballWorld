import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {MatchTable} from "../matchdayTable";


@Component({
  selector: 'app-english-matches',
  templateUrl: './english-matches.component.html',
  styleUrls: ['./english-matches.component.css']
})
export class EnglishMatchesComponent implements OnInit {

 baseUrl:string = 'http://api.football-data.org/v2/competitions/2021/matches';
 auth:string = "X-Auth-Token";
 key:string = 'b12b9f38b6364eef9bf114fa054a82a1';
 totalMatches = [];
 i: number = 0;
 numberofMatchDays:number;
 tempMatchData:MatchTable;
 tempMatchTable = []
 finalMatchTable = [];
 tempDate = [];     //to store the date before displaying local time
 displayData = []; 
 gameWeek:number = 1; //default gameweek displayed 


 constructor(private http:HttpClient) { }

  ngOnInit() {

  	//http.get request and assign headers for the request
  	this.http.get(this.baseUrl,{headers: new HttpHeaders().set(this.auth,this.key)}) 
  		.subscribe(res => {
  			//
  			this.totalMatches = [...res['matches']];
          if(this.totalMatches.length!=0){
      			this.numberofMatchDays =  (this.totalMatches[(this.totalMatches).length-1]).matchday;
      			
      			for(let eachMatch of this.totalMatches){

      				if(eachMatch.matchday == this.i + 1){

      					//Format date to display local date and time
      					this.tempDate = (eachMatch.utcDate).split('T'); //splite date and time

                this.tempDate[1] = this.tempDate[1].slice(0,-1);
                this.tempDate[0] = (new Date(this.tempDate[0] + " " + this.tempDate[1] + " " + "UTC"));
      			
      					this.tempDate[2] = (this.tempDate[0].getFullYear() + "-" + (this.tempDate[0].getMonth() +1)
      						+ "-" + this.tempDate[0].getDate());
                
      					this.tempDate[3] = (this.tempDate[0].getHours() + ":" + this.tempDate[0].getMinutes() + ":" + this.tempDate[0].getSeconds());
      					
                this.tempMatchData = {
      						awayTeam: eachMatch.awayTeam.name,
      						homeTeam: eachMatch.homeTeam.name,
      						score: (eachMatch.score.homeTeam) + ' - ' + (eachMatch.score.awayTeam),
      						date: [this.tempDate[2], this.tempDate[3]]
      					}
      					this.tempMatchTable.push(this.tempMatchData);
      				}
              //change in matchday push previous matchday into finalMatchTable
      				else if(eachMatch.matchday - this.i === 2){
      					this.finalMatchTable.push(this.tempMatchTable);
      					this.tempMatchTable = [];
      					this.i++;
      					this.tempDate = (eachMatch.utcDate).split('T');
      					this.tempDate[1] = this.tempDate[1].slice(0,-1);
      					this.tempDate[0] = (new Date(this.tempDate[0] + " " + this.tempDate[1] + " " + "UTC"));
      					
      					this.tempDate[2] = (this.tempDate[0].getFullYear() + "-" + this.tempDate[0].getMonth()
      						+ "-" + this.tempDate[0].getDate());
      					this.tempDate[3] = (this.tempDate[0].getHours() + ":" + this.tempDate[0].getMinutes() + ":" + this.tempDate[0].getSeconds());
      					this.tempMatchData = {
      						awayTeam: eachMatch.awayTeam.name,
      						homeTeam: eachMatch.homeTeam.name,
      						score: (eachMatch.score.homeTeam) + ' - ' + (eachMatch.score.awayTeam),
      						date: [this.tempDate[2], this.tempDate[3]]
      					};
      					this.tempMatchTable.push(this.tempMatchData);
      					
      				};		
      			};
      			this.finalMatchTable.push(this.tempMatchTable);
      			this.displayData = [...this.finalMatchTable[0]];
          }
  		});
  };
  //function to control to displayed matchday datas
  displayMatches(indexValue){
  	// let indexValue:number = Number(selectedMatchDay.value)
  	this.gameWeek = Number(indexValue) + 1;
  	this.displayData = [];
  	this.displayData = [...this.finalMatchTable[Number(indexValue)]];
  	
  };
 }

//console.log('last matchday' + this.numberofMatchDays);

  			//filter the matches by matchday
  			// while(this.i < this.numberofMatchDays){
  			// 	this.arrangedByDate[this.i] = this.totalMatches.filter((x)=> {
  			// 		return x.matchday == this.i + 1});
  			// 	this.i ++;
  			// };


 //arrangedbyDate has array of matches for each matchday
  			// for(let matches of this.arrangedByDate){
  			// 	for(let eachDay of matches){
  			// 		//console.log(eachDay);
  			// 		// console.log('date' + eachDay.utcDate);

  			// 		//Format date to display local date and time
  			// 		this.tempDate = (eachDay.utcDate).split('T');
  			// 		this.tempDate[1] = this.tempDate[1].slice(0,-1);
  			// 		this.tempDate[0] = (new Date(this.tempDate[0] + " " + this.tempDate[1] + " " + "UTC"));
  			// 		console.log(this.tempDate[0]);
  			// 		this.tempDate[2] = (this.tempDate[0].getFullYear() + "-" + this.tempDate[0].getMonth()
  			// 			+ "-" + this.tempDate[0].getDate());
  			// 		this.tempDate[3] = (this.tempDate[0].getHours() + ":" + this.tempDate[0].getMinutes() + ":" + this.tempDate[0].getSeconds());
  			// 		this.tempMatchTable = {
  			// 			awayTeam: eachDay.awayTeam.name,
  			// 			homeTeam: eachDay.homeTeam.name,
  			// 			score: (eachDay.score.homeTeam) + ' - ' + (eachDay.score.awayTeam),
  			// 			date: [this.tempDate[2], this.tempDate[3]]
  			// 		};
  			// 	};
  			// 	this.finalMatchTable.push(this.tempMatchTable);
  			// };
  			// console.log(this.finalMatchTable);
  			// for (let match of this.totalMatches){
  			// 	console.log(match);
  			// 	// this.arrangedByDate[this.i] = 
  			// 	console.log(match.filter((x) =>{ x.matchday == this.i+1;}));
  			// 	console.log('printing arrangedby date');
  			// 	console.log(this.arrangedByDate);
  			// 	this.i ++;
  			// 	console.log(this.i);
  			// };

      //   if(res['teams'].length != 0){this.allTeams.push(...(res['teams']));}
  			 // //copy contents into allTeams
      //    else{console.log('No teams found');};

