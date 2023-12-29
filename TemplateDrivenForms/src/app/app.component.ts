import { OnInit, ViewChild } from '@angular/core';
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
  DateOfBirth = '';

  OnFormSubmited() {
    console.log(this.Form);
    // this.Form.reset({
    //   gender: 'male',
    //   address: {
    //     Country: '', // Set the default value for the country control
    //   },
    // });
  }
  IsAgreed = false;
  @ViewChild('RegisterForm') Form: NgForm;
  @ViewChild('FormGroub') FormGroub: NgForm;
  CalcUserName() {
    let userName = '';
    if (this.fName.length >= 3) {
      userName += this.fName.slice(0, 3);
    } else {
      userName += this.fName;
    }
    userName += '_';
    if (this.lName.length >= 3) {
      userName += this.lName.slice(0, 3);
    } else {
      userName += this.lName;
    }
    userName += '_';

    let BirthYear = new Date(this.DateOfBirth);
    userName += BirthYear.getFullYear();
    userName = userName.toLocaleLowerCase();
    this.Form.value.username = userName;
    this.Form.form.patchValue({
      username: userName,
    });
  }
}
