import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';
import { trigger,style,animate,query,keyframes,stagger,transition } from '@angular/animations';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations:[
    trigger('postAnimation',[
      transition('* <=> *',[
        query(':enter',
        [
          style({opacity:0,transform:'translateY(-75px)'}),
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
export class PostsComponent implements OnInit {

  posts:Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(data=>this.posts=data);
  }

}
