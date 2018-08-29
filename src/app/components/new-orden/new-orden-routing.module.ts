import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewOrdenComponent } from './new-orden/new-orden.component';

const routes: Routes = [
    { path: '', component: NewOrdenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewOrdenRoutingModule { }
