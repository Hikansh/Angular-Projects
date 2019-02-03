import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginUserData={}

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  loginUser(){
    this.auth.loginUser(this.loginUserData).subscribe(
      res=> {
        this.router.navigate(['/specialevents'])
        localStorage.setItem('token',res.token)
    },
      err=> console.log(err)
      
      
    )
  }
}
