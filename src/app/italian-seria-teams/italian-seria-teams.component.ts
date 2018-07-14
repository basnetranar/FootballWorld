import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-italian-seria-teams',
  templateUrl: './italian-seria-teams.component.html',
  styleUrls: ['./italian-seria-teams.component.css']
})
export class ItalianSeriaTeamsComponent implements OnInit {

  baseUrl:string = 'http://api.football-data.org/v2/competitions/2019/teams';
  auth:string = "X-Auth-Token";
 key:string = 'b12b9f38b6364eef9bf114fa054a82a1';
 allTeams = []; //to store all the football teams
 teamMatches = [];//to store all the scheduled matches for any specific team
 allMatches = [];//response after making http request
 tempDate = [];//store the UTC date and covert it to local time
 teamID:number = 0; //team ID to call API for matches of individual team
 teamName:string = "Juventus FC";
 teamAddress:string = "Corso Galileo Ferraris, 32 Torino 10128";
 teamEmail: string = "francesco.gianello@juventus.com";
 teamFounded: number = 1897;
 teamWebsite: string = "http://www.juventus.com";

 constructor(private http:HttpClient) { }

  ngOnInit() {

  	// http.get request and assign headers for the request
  	this.http.get(this.baseUrl,{headers: new HttpHeaders().set(this.auth,this.key)}) 
  		.subscribe(res => {
        if(res['teams'].length != 0){this.allTeams.push(...(res['teams']));}

  			 //copy contents into allTeams
         else{console.log('No teams found');};
         
  		});
  }

  teamInfo(indexValue){
    
    this.teamName = (this.allTeams[indexValue]).name;
    this.teamFounded = (this.allTeams[indexValue]).founded;
    this.teamWebsite = (this.allTeams[indexValue]).website;
    this.teamEmail = (this.allTeams[indexValue]).email;
    this.teamAddress = (this.allTeams[indexValue]).address;
    this.teamID = (this.allTeams[indexValue]).id;

    this.http.get('http://api.football-data.org/v2/teams/'+this.teamID+'/matches',{headers: new HttpHeaders().set(this.auth,this.key)}) 
      .subscribe(res => {
           console.log(res);
           console.log(this.teamID);
          this.allMatches = [...res['matches']];

          if(this.allMatches.length !=0){
            for (let eachMatch of this.allMatches){

              //Change UTC date to local date and time
              this.tempDate = (eachMatch.utcDate).split('T'); //splite date and time
              this.tempDate[1] = this.tempDate[1].slice(0,-1);
              this.tempDate[0] = (new Date(this.tempDate[0] + " " + this.tempDate[1] + " " + "UTC"));
              this.tempDate[2] = (this.tempDate[0].getFullYear() + "-" + (this.tempDate[0].getMonth() +1)
                + "-" + this.tempDate[0].getDate());
              this.tempDate[3] = (this.tempDate[0].getHours() + ":" + this.tempDate[0].getMinutes() + ":" + this.tempDate[0].getSeconds());
              
                 
                 this.teamMatches.push({
                  homeTeam: eachMatch.homeTeam.name,
                  awayTeam: eachMatch.awayTeam.name,
                  competition: eachMatch.competition.name,
                  date: [this.tempDate[2],this.tempDate[3]],
                  score: ((eachMatch.score.fullTime.homeTeam) + ' - ' + (eachMatch.score.fullTime.awayTeam))
                });
            }; 
        }

      });
  };

}