import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  getCurrentUserData() {
    return this.http.get(`Users/currentUser`);
  }

  // https://upskilling-egypt.com:443/api/v1/Users/ChangePassword

  changePassword(userData) {
    return this.http.put(`Users/ChangePassword`, userData);
  }
}
