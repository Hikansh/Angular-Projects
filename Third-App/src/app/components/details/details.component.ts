import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
 })
export class DetailsComponent implements OnInit {

  user:Object;

  constructor(private data:DataService,private Route:ActivatedRoute) { 
    this.Route.params.subscribe(params=> this.user=params.id);//this is how we get the params of the url as we mentioned id in routing module
  }

  ngOnInit() {
    this.data.getUser(this.user).subscribe(data=>this.user=data);
  }


}
