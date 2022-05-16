import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = this.attachToken(request);
    return next.handle(request);
  }

  private attachToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    request = request.clone({
      setHeaders: {
        'session-key': '0a019fb6-d02b-46c5-9976-28e98e897274',
      },
    });
    return request;
  }
}
