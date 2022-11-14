import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn = false;

  login(username: string, password: string) {
    this.isLoggedIn = username === 'admin' && password === 'admin123';
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
