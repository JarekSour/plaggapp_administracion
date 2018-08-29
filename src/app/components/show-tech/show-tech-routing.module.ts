import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTechComponent } from './show-tech/show-tech.component';

const routes: Routes = [
    { path: '', component: ShowTechComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowTechRoutingModule { }
