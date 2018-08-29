import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowClientComponent } from './show-client/show-client.component';

const routes: Routes = [
    { path: '', component: ShowClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowClientRoutingModule { }
