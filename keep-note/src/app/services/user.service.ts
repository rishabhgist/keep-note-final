import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  URL: string = 'http://localhost/3000/users';

  post(data: any) {
    return this.http.post(this.URL, data);
  }
}
