import { Observable } from 'rxjs';
import { ArticleService } from '../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
    article$!: Observable<Article | undefined>;

    constructor(
        private route: ActivatedRoute,
        private articleService: ArticleService
    ) { }

    ngOnInit(): void {
        // { slug: value }
        //get param
        let slug = this.route.snapshot.paramMap.get('slug');
        //console.log(slug);
        this.article$ = this.articleService.getArticle(slug!);

    }

}
