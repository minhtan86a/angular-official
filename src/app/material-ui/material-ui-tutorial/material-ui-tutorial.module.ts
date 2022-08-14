import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiTutorialRoutingModule } from './material-ui-tutorial-routing.module';
import { MaterialUiTutorialComponent } from './material-ui-tutorial.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    MaterialUiTutorialComponent
  ],
  imports: [
    CommonModule,
    MaterialUiTutorialRoutingModule,
    MaterialModule,
    ScrollingModule
  ]
})
export class MaterialUiTutorialModule { }
