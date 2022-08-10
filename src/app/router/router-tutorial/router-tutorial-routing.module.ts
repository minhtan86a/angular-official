import { ArticlesGuard } from './guards/articles.guard';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterTutorialComponent } from './router-tutorial.component';

const routes: Routes = [
    {
        path: '',
        component: RouterTutorialComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'articles',
                loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule),
                canLoad: [ArticlesGuard] //for module only
            },
            {
                path: 'admin',
                component: AdminComponent,
                canActivate: [ArticlesGuard]
            }

        ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterTutorialRoutingModule { }
