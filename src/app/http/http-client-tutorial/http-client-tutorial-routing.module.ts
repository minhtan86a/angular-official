import { HttpAngularComponent } from './http-angular/http-angular.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTutorialComponent } from './http-client-tutorial.component';

const routes: Routes = [
    {
        path: '',
        component: HttpClientTutorialComponent,
        children: [
            {
                path: 'http-client',
                component: HttpClientComponent
            },
            {
                path: 'http-angular',
                component: HttpAngularComponent
            }

        ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpClientTutorialRoutingModule { }
