import { Route, Router } from '@angular/router';
import { AuthService } from './../Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private AuthService: AuthService, private Router: Router) {}
  UserName: string = '';
  Password: string = '';

  LogIn() {
    var User = this.AuthService.LogIn(this.UserName, this.Password);

    if (User == null || User == undefined) {
      alert('The Login Creadential is Not Valid');
    } else {
      alert(`Welcome ${User.name} Your Are Logged In`);
      this.Router.navigate(['Courses']);
    }
  }
}
