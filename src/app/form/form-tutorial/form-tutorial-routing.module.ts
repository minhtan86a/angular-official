import { BuilderFormComponent } from './builder-form/builder-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTutorialComponent } from './form-tutorial.component';

const routes: Routes = [
    {
        path: '',
        component: FormTutorialComponent,
        children: [
            {
                path:'template-driven-form',
                component: TemplateDrivenFormComponent
            },
            {
                path:'reactive-form',
                component: ReactiveFormComponent
            },
            {
                path:'builder-form',
                component: BuilderFormComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormTutorialRoutingModule { }
