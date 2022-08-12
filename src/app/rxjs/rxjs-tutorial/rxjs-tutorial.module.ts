import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsTutorialRoutingModule } from './rxjs-tutorial-routing.module';
import { RxjsTutorialComponent } from './rxjs-tutorial.component';


@NgModule({
  declarations: [
    RxjsTutorialComponent
  ],
  imports: [
    CommonModule,
    RxjsTutorialRoutingModule
  ]
})
export class RxjsTutorialModule { }
