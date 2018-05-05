import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showRegisterForm = false;

  constructor() { }

  ngOnInit() {
  }

  @Output()
  ToggleRegisterForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  onToggleRegisterForm(){
    this.showRegisterForm = !this.showRegisterForm;
    this.ToggleRegisterForm.emit(this.showRegisterForm);
    console.log(this.showRegisterForm);
  }
}
