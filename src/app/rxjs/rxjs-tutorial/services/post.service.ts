import { Post } from './../model/post';
import { Injectable } from '@angular/core';
import { catchError, take, Observable, throwError, map, concat, merge, forkJoin, switchMap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    private postUrl: string = 'https://jsonplaceholder.typicode.com/posts';
    private userUrl: string = 'https://jsonplaceholder.typicode.com/users';

    private posts$!: Observable<Post[]>;

    constructor(
        private httpClient: HttpClient
    ) { }

    //Get all posts
    getListPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(this.postUrl).pipe(
            catchError(this.handleError)
        );
    }

    //Get all posts
    //userId should be a param
    getPostsByUserId(userId:number): Observable<Post[]> {
        return this.httpClient.get<Post[]>(this.postUrl).pipe(
            map(
                posts => {
                    const postsByUserId = posts.filter( post => post.userId === userId );
                    return postsByUserId;
                }
            ),
            catchError(this.handleError)
        );
    }

    //get user by id
    getUserById(userId: number) {
        return this.httpClient.get<any[]>(this.userUrl).pipe(
            map(
                users => {
                    const userById = users.filter( user => user.id === userId );
                    return userById;
                }
            ),
            catchError(this.handleError)
        );
    }

    //combine user and posts belong to user
    combineUserPosts(userId: number) {
        const postsByUser = this.getPostsByUserId(userId);
        const userById = this.getUserById(userId);
        return forkJoin({ userById, postsByUser })
        .pipe(
            map( ( combineData ) => {
                    //console.log(combineData);

                    //format: [{ any[] , post[] }]
                    let dataArr = [combineData];
                    //console.log(dataArr);
                    return dataArr;
                }
            )
        )
    }

    loadPosts(userId: number) {
        return this.httpClient.get<Post[]>(this.postUrl).pipe(
            map(
                posts => {
                    const postsById = posts.filter( post => post.userId === userId );
                    return postsById
                }
            ),
            catchError(this.handleError)
        );
    }

    loadUser(userId:number) {
        return this.httpClient.get<any[]>(this.userUrl).pipe(
            map(
                users => {
                    const user = users.filter( users => users.id === userId );
                    return user;
                }
            ),
            catchError(this.handleError)
        );
    }

    //Making parallel requests.
    joinData(userId: number) {
        return forkJoin({
            user: this.loadUser(userId),
            posts: this.loadPosts(userId),
        })
        .pipe(
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
