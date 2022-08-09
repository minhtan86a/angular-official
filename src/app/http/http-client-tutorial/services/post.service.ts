import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PostEntity } from '../model/post-entity';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    private baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';
    constructor(
        private httpClient: HttpClient
    ) { }

    /*
    options: {
        headers?: HttpHeaders | {[header: string]: string | string[]},
        observe?: 'body' | 'events' | 'response',
        params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
        reportProgress?: boolean,
        responseType?: 'arraybuffer'|'blob'|'json'|'text',
        withCredentials?: boolean,
    }
    */

    //Get all posts
    getListPosts(): Observable<PostEntity[]> {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('angularVN', 'Angular Viet Nam'); // --> gán lại cho biến headers
        return this.httpClient.get<PostEntity[]>(
            this.baseUrl,
            // {
            //     params: new HttpParams(
            //         {
            //             fromObject: { id: '1'} //query params vào enpoint https://jsonplaceholder.typicode.com/posts?id=1
            //         }
            //     )
            // }
        ).pipe(
            catchError(this.handleError)
        );
    }

    //create a post
    createPost(post: PostEntity): Observable<PostEntity> {
        return this.httpClient.post<PostEntity>(this.baseUrl, post).pipe(
            catchError(this.handleError)
        );
    }

    //update a post
    updatePost(postId: number, post: PostEntity): Observable<PostEntity> {
        return this.httpClient.put<PostEntity>(this.baseUrl + `/${ postId }`, post).pipe(
            catchError(this.handleError)
        );
    }

    //update a part of post
    updateOptionPost(postId: number, post: Partial<PostEntity>): Observable<PostEntity> {
        return this.httpClient.patch<PostEntity>(this.baseUrl + `/${ postId }`, post).pipe(
            catchError(this.handleError)
        );
    }

    deletePost(postId: number): Observable<any> {
        return this.httpClient.delete(this.baseUrl + `/${ postId }`).pipe(
            catchError(this.handleError)
        );
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
