import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private router: Router) {}

  navigateToHomeView() {
    this.router.navigate(['']);
  }
  navigateToLoginView() {
    this.router.navigate(['login']);
  }
  navigateToTourRequestsView() {
    this.router.navigate(['note-view']);
  }
}
