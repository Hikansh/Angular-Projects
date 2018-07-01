import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;   //var of type string initialized
  age:number;
  address:{     //object type 
    street:string,
    city:string,
    state:string
  }
  //we can also create object type as an interface and use it:
  profession:Profession;//interface is created below
  //setting up arrays:
  hobbies:string[];
  //any data type:
  variab:any;
  c:number;
  isEdit:boolean=false ;


  constructor(private dataservice:DataService) {

   }

  ngOnInit() {  //will run when the component is initialized

    this.name="Hikansh Kapoor";  //defined
    this.age=19;
    this.address={
      street:"rajouri",
      city:"delhi",
      state:"DL"
    }
    this.hobbies=['x','y','z'];
    this.variab=true;
    this.c=1;
  }

  onClick(){
    this.name="Added New Hobby "+this.c+" times";
    this.c++;
   // this.hobbies.push('New Hobby Added');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit=!this.isEdit;
  }

}


interface Profession{
  degree:string,
  year:number
}
interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}