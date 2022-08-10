import { PromiseTutorialComponent } from './javascript/js-section/promise-tutorial/promise-tutorial.component';
import { ObjectTutorialComponent } from './javascript/js-section/object-tutorial/object-tutorial.component';
import { ArrayTutorialComponent } from './javascript/js-section/array-tutorial/array-tutorial.component';
import { JsTutorialComponent } from './javascript/js-tutorial/js-tutorial.component';
import { SizerParentComponent } from './templates/templates-section/sizer-parent/sizer-parent.component';
import { SharingDataComponent } from './components/components-section/sharing-data/sharing-data.component';
import { ComponentInteractionComponent } from './components/components-section/component-interaction/component-interaction.component';
import { LifecycleHooksComponent } from './components/components-section/lifecycle-hooks/lifecycle-hooks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplatesComponent } from './templates/templates.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentsComponent } from './components/components.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path:'javascript',
        component: JsTutorialComponent,
        children: [
            {
                path:'array-tutorial',
                component: ArrayTutorialComponent
            },
            {
                path:'object-tutorial',
                component: ObjectTutorialComponent
            },
            {
                path:'promise-tutorial',
                component: PromiseTutorialComponent
            },
        ]
    },
    {
        path:'components',
        component: ComponentsComponent,
        children: [
            {
                path:'lifecycle-hooks',
                component: LifecycleHooksComponent
            },
            {
                path:'component-interaction',
                component: ComponentInteractionComponent
            },
            {
                path: 'sharing-data',
                component: SharingDataComponent
            }
        ]
    },
    {
        path:'templates',
        component: TemplatesComponent,
        children: [
            {
                path: 'two-way-binding',
                component: SizerParentComponent
            }
        ]
    },
    {
        path:'directives',
        component: DirectivesComponent,

    },
    {
        path: '',
        redirectTo: '/components', // redirect to `components`
        pathMatch: 'full'
    },
    {
        path: 'form-tutorial',
        loadChildren: () => import('./form/form-tutorial/form-tutorial.module').then(m => m.FormTutorialModule) },
    {
        path: 'http-client-tutorial',
        loadChildren: () => import('./http/http-client-tutorial/http-client-tutorial.module').then(m => m.HttpClientTutorialModule) },
    {
        path: 'router-tutorial',
        loadChildren: () => import('./router/router-tutorial/router-tutorial.module').then(m => m.RouterTutorialModule) },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //{ enableTracing: !environment.production }
  exports: [RouterModule]
})
export class AppRoutingModule { }
