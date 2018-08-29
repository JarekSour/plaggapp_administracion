import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPuntoComponent } from './show-punto/show-punto.component';

const routes: Routes = [
    { path: '', component: ShowPuntoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowPuntoRoutingModule { }
