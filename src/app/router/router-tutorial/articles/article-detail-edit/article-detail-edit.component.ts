import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-detail-edit',
  templateUrl: './article-detail-edit.component.html',
  styleUrls: ['./article-detail-edit.component.scss']
})
export class ArticleDetailEditComponent implements OnInit {
    article$!: Observable<Article | undefined>;

    constructor(
        private route: ActivatedRoute,
        private articleService: ArticleService
    ) { }

    ngOnInit(): void {
         //get param
         let slug = this.route.snapshot.paramMap.get('slug');
         //console.log(slug);
         this.article$ = this.articleService.getArticle(slug!);
    }

}
