import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const $baseUrl = 'http://upskilling-egypt.com:3002/docs/api/v1/';
    const authToken = localStorage.getItem('token');
    let headers = request.headers
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    if (!authToken) {
      headers.set('Authorization', `Bearer ${authToken} `);
    }

    const apiUrl = $baseUrl + request.url;
    const hossam = request.clone({ url: apiUrl, headers: headers });
    return next.handle(hossam);
  }
}
