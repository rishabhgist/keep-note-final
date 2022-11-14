import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private routeSerive: RouteService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }
  isLoggedIn: boolean = false;
  
  ngOnInit(): void {
    
  }

  logout() {
     this.snackBar.open('Logged Out', 'success', {
       duration: 3000,
       panelClass: ['mat-primary', 'mat-accent'],
     });
    this.isLoggedIn = false;
    this.authService.logout();
    this.routeSerive.navigateToLoginView();
  }
}
