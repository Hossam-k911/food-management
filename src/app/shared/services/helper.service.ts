import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private _http: HttpClient) {}
  getGategories(): Observable<any> {
    let pageSize = '100';
    return this._http.get('Category', { params: { pageSize } });
  }
  getTags(): Observable<any> {
    return this._http.get('tag');
  }
}
