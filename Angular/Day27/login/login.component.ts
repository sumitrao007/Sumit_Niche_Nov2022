import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:HttpService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(emailid:any,password:any){
    let obj={
      email:emailid,
      password:password
    }

    this.service.login(obj)
    .subscribe((response:any)=>{
      console.log(response);

      if(response.msg=='Valid User'){
        sessionStorage.setItem("username",response.user.username);
        this.router.navigate(['/dashboard']);
      }else{
        alert("User is invalid")
      }


    })
  }

}
