import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterTutorialRoutingModule } from './router-tutorial-routing.module';
import { RouterTutorialComponent } from './router-tutorial.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    RouterTutorialComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterTutorialRoutingModule
  ]
})
export class RouterTutorialModule { }
