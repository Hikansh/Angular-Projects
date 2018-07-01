import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[

    trigger('goals',[   //to start an animation this is the first func to be called
      transition('* => *',[  //any state to any state this transition will occur
        query(':enter',style({ opacity:0 }),{ optional:true }),

        query(':enter', stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({ opacity:0 , transform:'translateY(-75%)',offset:0 }),
            style({ opacity:0.5 , transform:'translateY(35px)',offset:0.3 }),
            style({ opacity:1 , transform:'translateY(0)',offset:1 })
          ]))]),{optional:true}),
         
          query(':leave', stagger('300ms',[
            animate('.6s ease-in',keyframes([
              style({ opacity:1 , transform:'translateY(0)',offset:0 }),
              style({ opacity:0.5 , transform:'translateY(35px)',offset:0.3 }),
              style({ opacity:0 , transform:'translateY(-75%)',offset:1 })
            ]))]),{optional:true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {


  itemCount:number;
  goalText:string="";
  goals=[];

  constructor(private data:DataService) { }

  ngOnInit() {
 //   this.itemCount=this.goals.length;
    this.data.goal.subscribe(res=>this.goals=res);
    this.itemCount=this.goals.length;
    this.data.changeGoal(this.goals);
  }
  addItem(){
    if(this.goalText!=''){
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCount=this.goals.length;
    this.data.changeGoal(this.goals);
  }
}
  deleteItem(i){
    this.goals.splice(i,1);
    this.itemCount--;
    this.data.changeGoal(this.goals);
  }

}
