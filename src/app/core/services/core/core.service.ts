import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private http: HttpClient) {}

  login(loginData) {
    return this.http.post(`Users/Login`, loginData);
  }

  resetWithEmail(email) {
    return this.http.post(`Reset/Request`, email);
  }
}
