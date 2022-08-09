import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Config } from '../model/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    configUrl = 'assets/config.json';

    constructor(
        private http: HttpClient
    ) { }

    //No options
    getConfig() {
        return this.http.get<Config>(this.configUrl).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    //options { observe: response }
    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(
          this.configUrl, { observe: 'response' });
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
      }
}
