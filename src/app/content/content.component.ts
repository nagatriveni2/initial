import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  tog:boolean =true;
  tog1:boolean =true;
  tog2:boolean =true;
  constructor() { }

  ngOnInit(): void {
  }
  change(){
    this.tog=!this.tog;

  }
  change1(){
    this.tog1=!this.tog1;

  }
  change2(){
    this.tog2=!this.tog2;

  }
}
