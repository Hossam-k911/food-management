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
    const $baseUrl = 'https://upskilling-egypt.com:443/api/v1/';
    const authToken = localStorage.getItem('token');
    let newheaders = {};
    if (authToken !== null) {
      newheaders = { Authorization: `Bearer ${authToken}` };
    }

    let cloned = request.clone({
      setHeaders: newheaders,
      url: $baseUrl + request.url,
    });

    return next.handle(cloned);
  }
}
