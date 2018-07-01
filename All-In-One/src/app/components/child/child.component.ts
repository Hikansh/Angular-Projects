import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  template: `
    <h3 class="display-4">{{name}}</h3>
    <button (click)=vote(true) [disabled]=didVote class="btn btn-success">Yes</button>&nbsp;&nbsp;&nbsp;
    <button (click)=vote(false) [disabled]=didVote class="btn btn-danger">No</button>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

@Input() name:string;
@Output() voted=new EventEmitter<boolean>();
didVote:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  vote(agreed:boolean){
    this.voted.emit(agreed);
    this.didVote=true;
  }

}
