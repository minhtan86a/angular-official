import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientTutorialRoutingModule } from './http-client-tutorial-routing.module';
import { HttpClientTutorialComponent } from './http-client-tutorial.component';
import { HttpClientComponent } from './http-client/http-client.component';

//import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HttpClientTutorialComponent,
    HttpClientComponent
  ],
  imports: [
    CommonModule,
    //HttpClientModule, //import in app.module.ts
    HttpClientTutorialRoutingModule
  ]
})
export class HttpClientTutorialModule { }
