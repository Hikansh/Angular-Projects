import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Observable} from 'rxjs';
import { trigger,style,animate,query,keyframes,stagger,transition } from '@angular/animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations:[
    trigger('userAnimation',[
      transition('* <=> *',[
        query(':enter',
        [
          style({opacity:0,transform:'translateY(-45px)'}),
          stagger('50ms',
        animate('550ms ease-out',
      style({opacity:1,transform:'translateY(0px)'})))
        ],{optional:true}),
        query(':leave',
        [
          style({opacity:1,transform:'translateY(0px)'}),
          stagger('50ms',
        animate('550ms ease-out',
      style({opacity:0,transform:'translateY(-15px)'})))
        ],{optional:true})
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  users:Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data=> this.users = data);
  }

}
