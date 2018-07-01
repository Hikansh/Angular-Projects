import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name:string="";
  isDone:boolean=false;
  
  constructor() { }

  ngOnInit() {
  }

  changeName(name:string){
    this.name=name;
    console.log(this.name);
    this.isDone=true;
  }
}
