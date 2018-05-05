import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showRegisterForm = false;

  onRegisterLink(showRegisterForm:boolean){
    this.showRegisterForm = showRegisterForm;
    console.log("in parent: " + showRegisterForm);
  }
}
