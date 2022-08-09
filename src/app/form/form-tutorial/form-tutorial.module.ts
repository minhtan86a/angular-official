import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormTutorialRoutingModule } from './form-tutorial-routing.module';
import { FormTutorialComponent } from './form-tutorial.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuilderFormComponent } from './builder-form/builder-form.component';


@NgModule({
  declarations: [
    FormTutorialComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    BuilderFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //template-driven-form
    ReactiveFormsModule, //reactive-form
    FormTutorialRoutingModule
  ]
})
export class FormTutorialModule { }
