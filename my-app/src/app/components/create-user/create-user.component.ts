import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  isCorrect = false;
  isIncorrect = false;

  pwd1 = ""
  pwd2 = ""

  create (){if(this.pwd1 == "1234" && this.pwd2 == "1234") {
    this.isIncorrect = false;
    this.isCorrect = true;
    console.log ("Senha Aprovada")
   } else {
    this.isIncorrect = true;
    this.isCorrect = false
  }
  }

}