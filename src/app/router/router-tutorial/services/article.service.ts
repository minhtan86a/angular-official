import { Injectable } from '@angular/core';
import { of, Observable, map } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

    constructor() { }

    get articles$(){
        return of<Article[]>([
            {title: 'Title 1', body: 'some text 1 here', slug: 'title-1'},
            {title: 'Title 2', body: 'some text 2 here', slug: 'title-2'}
        ])
    }

    getArticle(slug: string): Observable<Article | undefined> {
        return this.articles$.pipe(map(
            articles => articles.find(ar => ar.slug === slug)
        ));
    }
}
