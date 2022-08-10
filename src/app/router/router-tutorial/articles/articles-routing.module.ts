import { ArticlesGuard } from './../guards/articles.guard';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ArticleListComponent
            },
            {
                path: 'detail/:slug',
                canActivateChild: [ArticlesGuard],
                //component: ArticleDetailComponent
                children: [
                    {
                        path: '',
                        component: ArticleDetailComponent
                    },
                    {
                        path: 'edit',
                        component: ArticleDetailEditComponent
                    }
                ]
            },

        ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
