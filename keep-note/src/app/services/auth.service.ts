import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn = false;

  login(username: string, password: string) {
    if (username === "admin" && password === "admin") {
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
