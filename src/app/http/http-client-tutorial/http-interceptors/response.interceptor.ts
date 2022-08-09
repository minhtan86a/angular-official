import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor() {}

    //response time interceptor implementation
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        //http request
        //console.log(request);
        const started = Date.now();
        return next.handle(request)
            .pipe(
                tap({
                    // Succeeds when there is a response; ignore other events
                    // http response
                    next: (event) => event instanceof HttpResponse,
                    // Operation failed; error is an HttpErrorResponse
                    error: (error) => (console.log(error))
                }),
                // Log when response observable either completes or errors
                finalize(() => {
                    const elapsed = Date.now() - started;
                    //console.log(request);
                    console.log(`${request.method} "${request.urlWithParams}" in ${elapsed} ms.`);
                })
            );
  }
}
