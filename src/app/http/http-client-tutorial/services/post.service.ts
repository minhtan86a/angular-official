import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
        );
    }

    //create a post
    createPost(post: PostEntity): Observable<PostEntity> {
        return this.httpClient.post<PostEntity>(this.baseUrl, post);
    }

    //update a post
    updatePost(postId: number, post: PostEntity): Observable<PostEntity> {
        return this.httpClient.put<PostEntity>(this.baseUrl + `/${ postId }`, post);
    }

    //update a part of post
    updateOptionPost(postId: number, post: Partial<PostEntity>): Observable<PostEntity> {
        return this.httpClient.patch<PostEntity>(this.baseUrl + `/${ postId }`, post);
    }

    deletePost(postId: number): Observable<any> {
        return this.httpClient.delete(this.baseUrl + `/${ postId }`);
    }
}
