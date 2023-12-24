import { User } from './../Models/user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private UserService: UserService) {}

  IsLogged = false;

  LogIn(username: string, password: string) {
    var User = this.UserService.users.find(
      (c) => c.username === username && c.password === password
    );

    if (User === null || User === undefined) {
      this.IsLogged = false;
    } else {
      this.IsLogged = true;
    }
    return User;
  }
  LogOut() {
    this.IsLogged = false;
  }
  IAuthenticated() {
    return this.IsLogged;
  }
}
