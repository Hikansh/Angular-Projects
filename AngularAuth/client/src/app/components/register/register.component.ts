import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUserData={email: '', 
    password:''}

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

   emailValidate(email) {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) 
    {
        return false;
    }
    else{
      return true;
    }
}

  registerUser(){
    if(this.registeredUserData.email==="" || this.registeredUserData.password==="" ||this.registeredUserData.email==null || this.registeredUserData.password==null){
      console.log("err"); 
    }
    else{
      this.auth.registerUser(this.registeredUserData).subscribe(
        res=>{
          this.router.navigate(['/specialevents'])
          localStorage.setItem('token',res.token)
      },
        err=>console.log(err)
      )
  
    }
    
  }

}
