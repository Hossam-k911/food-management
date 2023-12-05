import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  role: string = '';
  constructor(private http: HttpClient) {
    if (localStorage.getItem('token') !== null) {
      this.getProfile();
    }
  }
  login(loginData) {
    return this.http.post(`Users/Login`, loginData);
  }

  resetWithEmail(email) {
    return this.http.post(`Users/Reset/Request`, email);
  }
  resetPassword(userData) {
    return this.http.post(`Users/Reset`, userData);
  }

  getProfile() {
    let encoded: any = localStorage.getItem('token');
    let decoded: any = jwtDecode(encoded);
    localStorage.setItem('role', decoded.userGroup);
    localStorage.setItem('userName', decoded.userName);
    this.getRole();
  }
  getRole() {
    if (
      localStorage.getItem('token') !== null &&
      localStorage.getItem('role')
    ) {
      this.role = localStorage.getItem('role');
    }
  }
}
