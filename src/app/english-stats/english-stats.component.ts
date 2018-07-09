import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-english-stats',
  templateUrl: './english-stats.component.html',
  styleUrls: ['./english-stats.component.css']
})
export class EnglishStatsComponent implements OnInit {

 baseUrl:string = 'http://api.football-data.org/v2/competitions/2021/teams';
 auth:string = "X-Auth-Token";
 key:string = 'b12b9f38b6364eef9bf114fa054a82a1';
 allTeams = []; //to store all the football teams
 
 teamName:string = "Arsenal FC";
 teamAddress:string = "75 Drayton Park London N5 1BU";
 teamEmail: string = "info@arsenal.co.uk";
 teamFounded: number = 1886;
 teamWebsite: string = "http://www.arsenal.com";

 constructor(private http:HttpClient) { }

  ngOnInit() {
  	

  	//http.get request and assign headers for the request
  	this.http.get(this.baseUrl,{headers: new HttpHeaders().set(this.auth,this.key)}) 
  		.subscribe(res => {
  			this.allTeams.push(...(res['teams'])); //copy contents into allTeams

  		});

  }

  teamInfo(indexValue){
    this.teamName = (this.allTeams[indexValue]).name;
    this.teamFounded = (this.allTeams[indexValue]).founded;
    this.teamWebsite = (this.allTeams[indexValue]).website;
    this.teamEmail = (this.allTeams[indexValue]).email;
    this.teamAddress = (this.allTeams[indexValue]).address;
  };

}
