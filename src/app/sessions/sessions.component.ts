import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  live:boolean=false;
  demand:boolean=false;
  team:boolean=false;
  agenda:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
calllive(){
  this.live=true;
  this.demand=false;
  this.team=false;
  this.agenda=false;
}
calldemand(){
  this.demand=true;
  this.live=false;
  this.team=false;
  this.agenda=false;
}
callteam(){
  this.team=true;
  this.live=false;
  this.demand=false;
  this.agenda=false;
}
callagenda(){
  this.agenda=true;
  this.live=false;
  this.demand=false;
  this.team=false;
}
}
