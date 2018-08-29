import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowOrdenComponent } from './show-orden/show-orden.component';

const routes: Routes = [
    { path: '', component: ShowOrdenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowOrdenRoutingModule { }
