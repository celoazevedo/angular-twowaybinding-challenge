import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  

  
  name = 'Angular';
  title1: string = 'Email or Phone';
  inputText1= '';
  title2 = 'Password';
  inputText2= '';

  linkText = 'Forgot account?';
  linkURL = 'https://www.google.com';


  user = {
    email: this.inputText1,
    password: this.inputText2
  }

// For the login button, create an event that alerts the value of the Email and Password fields.

  clickAlert() {
    // console.log(this.inputText1)
    // console.log(this.inputText2)
    alert(this.inputText1 + this.inputText2)
    // alert(this.inputText2)
  }

}
