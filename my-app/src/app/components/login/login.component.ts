import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private router: Router) {


  }

  isError = false;

  isSucess = false;

  user = ""
  pwd= ""

  login() {
  
    console.log("User = " + this.user + "Password = " + this.pwd )
    if( this.user == "sar4silv4" && this.pwd == "1234") { 
      this.isError = false; 
      this.isSucess = true
      console.log ("Login Aprovado")
      this.router.navigateByUrl('/dashboard')
     } else { 
      this.isError = true;
      this.isSucess = false;
     }
  }

 
  
}

