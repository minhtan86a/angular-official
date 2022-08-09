import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor() {}

    //request: take only http request
    //next its operate the handle method
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        //add an api key custom header
        const apiKey = 'set api key for request';
        request = request.clone({
            setHeaders: {
                'api-key': apiKey,
            }
        })
        return next.handle(request);
    }
}
