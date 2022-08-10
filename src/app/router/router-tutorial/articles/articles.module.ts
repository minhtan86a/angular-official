import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleRoutingModule } from './articles-routing.module';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleDetailEditComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticlesModule { }
