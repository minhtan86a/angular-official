import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUiTutorialComponent } from './material-ui-tutorial.component';

const routes: Routes = [{ path: '', component: MaterialUiTutorialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialUiTutorialRoutingModule { }
