import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.RegisterForm();
  }
  RegisterForm() {
    this.ReactiveForm = new FormGroup({
      FirstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      UserName: new FormControl(null),
      DateOfBirth: new FormControl(null),
      Street: new FormControl(null),
      Gender: new FormControl(null),
      Country: new FormControl(['America', 'India']),
      City: new FormControl(null),
      Region: new FormControl(null),
      Code: new FormControl(null),
    });
  }
  title = 'ReactiveForms';
  ReactiveForm: FormGroup;
  OnFormSubmited() {
    console.log(this.ReactiveForm);
  }
}
