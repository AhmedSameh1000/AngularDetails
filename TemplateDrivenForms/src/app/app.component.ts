import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TemplateDrivenForms';
  fName = '';
  lName = '';
  UserEmail = '';
  OnFormSubmited() {
    console.log(this.fName);
    console.log(this.lName);
    console.log(this.UserEmail);
  }
  @ViewChild('RegisterForm') Form: NgForm;
}
