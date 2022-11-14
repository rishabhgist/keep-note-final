import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fg: FormBuilder,
    private authService: AuthService,
    private routeService: RouteService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  userLogin = this.fg.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  login(user: any) {
    if (user) {
      const username = user.get('username')?.value;
      const password = user.get('password')?.value;
      // console.log(this.authService.login(username, password));
      if (this.authService.login(username, password)) {
        this.authService.isLoggedIn = true;
        this.routeService.navigateToTourRequestsView();
      } else {
        this.snackBar.open('Invalid credentials', 'Failed', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-primary'],
        });
      }
    }
  }
}
