import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private API_URL = environment.API_URL;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = this.attachToken(request);
    return next.handle(request);
  }

  private attachToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    if (request.url.indexOf(this.API_URL) !== -1) {
      request = request.clone({
        setHeaders: {
          'session-key': '0a019fb6-d02b-46c5-9976-28e98e897274',
        },
      });
    }
    return request;
  }
}
