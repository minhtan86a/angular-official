import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsTutorialComponent } from './rxjs-tutorial.component';

const routes: Routes = [
    {
        path: '',
        component: RxjsTutorialComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsTutorialRoutingModule { }
